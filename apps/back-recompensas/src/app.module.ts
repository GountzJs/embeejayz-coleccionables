import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { AccountModule } from "./account/account.module";
import { BorderModule } from "./border/border.module";
import { EmbeecardModule } from "./embeecard/embeecard.module";
import { Worlds2025Module } from "./worlds2025/worlds2025.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
    }),
    AccountModule,
    BorderModule,
    EmbeecardModule,
    Worlds2025Module,
  ],
})
export class AppModule {}
