/** biome-ignore-all lint/style/useImportType: any */
import { Controller, Get, HttpCode, HttpException, HttpStatus, Param } from "@nestjs/common";
import { GetTicketsDTO } from "./models/dtos/get-tickets.dto";
import { AccountTicketImplRepositoryService } from "./services/account-ticket-impl-repository/account-ticket-impl-repository.service";

@Controller("tickets")
export class TicketsController {
    constructor(private accountTicketService: AccountTicketImplRepositoryService) {}

	@Get("/:id")
	@HttpCode(HttpStatus.OK)
	async getAll(@Param() { id }: GetTicketsDTO) {
        try {
            const data = await this.accountTicketService.getByUserId(id);
            return { tickets: data }
        } catch {
            throw new HttpException(
                'Error genérico del sistema',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
