import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { getStickersAdapter } from './adapters/get-stickers.adapter';
import { FilterStickersDTO } from './models/dtos/filter-stickers.dto';
import { GetStickersDTO } from './models/dtos/get-stickers.dto';
import { AccountStickerImplRepositoryService } from './services/account-sticker-impl-repository/account-sticker-impl-repository.service';

@Controller('worlds2025')
export class Worlds2025Controller {
  constructor(
    private readonly accountStickerImplRepositoryService: AccountStickerImplRepositoryService,
  ) {}

  @Get('/users/:id')
  @HttpCode(HttpStatus.OK)
  async getAll(
    @Param() { id }: GetStickersDTO,
    @Query() { page: ActualPage = 1 }: FilterStickersDTO,
  ) {
    try {
      const { page, totalPages, totalItems, items } =
        await this.accountStickerImplRepositoryService.findByUserId(
          id,
          ActualPage,
        );
      return getStickersAdapter(page, totalPages, totalItems, items);
    } catch {
      throw new HttpException(
        'Error genérico del sistema',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/users/:id/stickers')
  @HttpCode(HttpStatus.OK)
  async getStickersByUser(@Param() { id }: GetStickersDTO) {
    try {
      const data =
        await this.accountStickerImplRepositoryService.findStickerIdsByUserId(
          id,
        );
      return { data };
    } catch {
      throw new HttpException(
        'Error genérico del sistema',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
