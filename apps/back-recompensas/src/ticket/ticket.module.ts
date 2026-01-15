/** biome-ignore-all assist/source/organizeImports: Auto save import */
import { Module } from '@nestjs/common';
import { TicketsController } from './ticket.controller';
import { AccountTicketImplRepositoryService } from './services/account-ticket-impl-repository/account-ticket-impl-repository.service';

@Module({
  controllers: [TicketsController],
  providers: [AccountTicketImplRepositoryService],
})
export class TicketModule {}
