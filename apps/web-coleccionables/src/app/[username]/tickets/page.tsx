import { useProfileContext } from "@modules/accounts/presentation/contexts/profile.context";
import { ListTickets } from "@modules/tickets/presentation/components/list-tickets";

export default function Page() {
	const { data } = useProfileContext();

	return (
		<div className="flex flex-col flex-1 gap-14 w-full h-full">
			{data && (
				<ListTickets
					id={data.id}
					avatar={data.avatar}
					username={data.username}
				/>
			)}
		</div>
	);
}
