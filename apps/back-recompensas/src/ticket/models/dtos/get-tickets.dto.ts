import { IsNotEmpty, IsUUID } from "class-validator";

export class GetTicketsDTO {
	@IsUUID("4")
	@IsNotEmpty()
	id: string;
}
