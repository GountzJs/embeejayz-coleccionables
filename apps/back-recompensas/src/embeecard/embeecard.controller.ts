import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { getCardsAdapter } from './adapters/get-cards.adapter';
import { getLatestCardsAdapter } from './adapters/get-latest-cards.adapter';
import { FilterEmbeeCardsDTO } from './models/dtos/filter-embeecard.dto';
import { FilterLastCardsDTO } from './models/dtos/filter-last-cards.dto';
import { GetEmbeeCardsDTO } from './models/dtos/get-embeecards.dto';
import { GetLastCardsDTO } from './models/dtos/get-last-cards.dto';
import { AccountEmbeecardImplRepositoryService } from './services/account-embeecard-impl-repository/account-embeecard-impl-repository.service';
import { quantityByPack } from './utils/quantity-by-pack';

@Controller('embeecards')
export class EmbeecardController {
  constructor(
    private readonly accountEmbeecard: AccountEmbeecardImplRepositoryService,
  ) {}

  @Get('/users/:id')
  @HttpCode(HttpStatus.OK)
  async getAll(
    @Param() { id }: GetEmbeeCardsDTO,
    @Query() { page: ActualPage = 1 }: FilterEmbeeCardsDTO,
  ) {
    try {
      const { page, totalPages, totalItems, items } =
        await this.accountEmbeecard.findByUserId(id, ActualPage);
      return getCardsAdapter(page, totalPages, totalItems, items);
    } catch {
      throw new HttpException(
        'Error genérico del sistema',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/:ref/last')
  @HttpCode(HttpStatus.OK)
  async lastCards(
    @Param() { ref }: GetLastCardsDTO,
    @Query() { sizePack }: FilterLastCardsDTO,
  ) {
    const quantity = quantityByPack(sizePack);
    try {
      const cards = await this.accountEmbeecard.findLastCardsByQuantity(
        quantity,
        ref,
      );
      return getLatestCardsAdapter(cards);
    } catch {
      throw new HttpException(
        'Error genérico del sistema',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
