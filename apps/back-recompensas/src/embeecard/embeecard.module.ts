import { Module } from '@nestjs/common';
import { EmbeecardController } from './embeecard.controller';
import { AccountEmbeecardImplRepositoryService } from './services/account-embeecard-impl-repository/account-embeecard-impl-repository.service';

@Module({
  controllers: [EmbeecardController],
  providers: [AccountEmbeecardImplRepositoryService],
})
export class EmbeecardModule {}
