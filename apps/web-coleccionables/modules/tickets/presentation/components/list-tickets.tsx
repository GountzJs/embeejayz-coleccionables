import { v4 } from "uuid";
import { useGetInfoTicketQuery } from "../queries/get-info-ticket.query";
import { useGetTicketsQuery } from "../queries/get-tickets.query";
import { Ticket } from "./ticket";

interface Props {
	id: string;
	avatar: string;
	username: string;
	team: string | null;
}

export function ListTickets({ id, avatar, username, team }: Props) {
	const { data: item } = useGetInfoTicketQuery({ username });
	const { data, isLoading, error } = useGetTicketsQuery({ id });

	if (isLoading) return <p>Buscando tickets...</p>;

	if (error) return <p>No pudimos recuperar tus tickets</p>;

	if (data && data.length === 0)
		return <p>Aún no tienes tickets de enfrentamiento</p>;

	return (
		<ul className="flex flex-wrap gap-4 h-auto max-h-full w-full">
			{data?.map((ticket) => (
				<li key={v4()}>
					<Ticket
						avatar={avatar}
						username={username}
						frontUrl={ticket.cover}
						date={ticket.date}
						hourArg={ticket.hourArg}
						hourMx={ticket.hourMx}
						dateFollow={item?.followedAt || null}
						team={team}
					/>
				</li>
			))}
		</ul>
	);
}
