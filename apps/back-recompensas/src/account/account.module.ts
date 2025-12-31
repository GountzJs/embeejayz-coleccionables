import { Module } from '@nestjs/common';
import { TwitchModule } from '../lib/twitch/twitch.module';
import { AccountController } from './account.controller';
import { AccountImplRepositoryService } from './services/account-impl-respository/account-impl-respository.service';

@Module({
  imports: [TwitchModule],
  providers: [AccountImplRepositoryService],
  controllers: [AccountController],
})
export class AccountModule {}
