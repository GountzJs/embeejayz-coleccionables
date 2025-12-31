import { Module } from '@nestjs/common';
import { Worlds2025Controller } from './worlds2025.controller';
import { AccountStickerImplRepositoryService } from './services/account-sticker-impl-repository/account-sticker-impl-repository.service';

@Module({
  controllers: [Worlds2025Controller],
  providers: [AccountStickerImplRepositoryService],
})
export class Worlds2025Module {}
