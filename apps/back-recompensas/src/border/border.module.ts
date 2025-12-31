import { Module } from '@nestjs/common';
import { BorderController } from './border.controller';
import { BorderImplRepositoryService } from './services/border-impl-repository/border-impl-repository.service';
import { AccountBorderImplRepositoryService } from './services/account-border-impl-repository/account-border-impl-repository.service';

@Module({
  controllers: [BorderController],
  providers: [BorderImplRepositoryService, AccountBorderImplRepositoryService],
})
export class BorderModule {}
