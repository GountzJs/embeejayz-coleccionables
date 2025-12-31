import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { bordersAdapter } from './adapters/borders.adapter';
import { FiltersBordersDTO } from './models/dtos/filters-borders.dto';
import { GetBordersDTO } from './models/dtos/get-borders.dto';
import { Order } from './models/enums/order.enum';
import { Sort } from './models/enums/sort.enum';
import { AccountBorderImplRepositoryService } from './services/account-border-impl-repository/account-border-impl-repository.service';

@Controller('borders')
export class BorderController {
  constructor(
    private readonly accountBorder: AccountBorderImplRepositoryService,
  ) {}

  @Get('/users/:id')
  @HttpCode(HttpStatus.OK)
  async getAll(
    @Param() { id }: GetBordersDTO,
    @Query() query: FiltersBordersDTO,
  ) {
    try {
      const {
        page = 1,
        name = '',
        sort = Sort.Asc,
        orderBy = Order.Rank,
      } = query;
      const accountBorders = await this.accountBorder.findByUserId(
        id,
        page,
        sort,
        name,
        orderBy,
      );

      if (!accountBorders.items.length)
        return new HttpException(
          'No se encontraron bordes',
          HttpStatus.NOT_FOUND,
        );

      return bordersAdapter(accountBorders);
    } catch {
      throw new HttpException(
        'Error genérico del sistema',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
