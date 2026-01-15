// biome-ignore assist/source/organizeImports: <Autosave import>
import { apiUrl } from "@/core/settings";
import { getAllTickets, getInfoTicket } from "./application";
import { FetchTicketsImplRepository } from "./infraestructure/fetch-tickets-impl.repository";

const fetchTicketsImplRepository = new FetchTicketsImplRepository(apiUrl);

export const GetAllTickets = getAllTickets(fetchTicketsImplRepository);

export const GetInfoTicket = getInfoTicket(fetchTicketsImplRepository);
