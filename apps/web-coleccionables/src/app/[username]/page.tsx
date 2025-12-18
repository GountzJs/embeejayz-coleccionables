import { useProfileContext } from "@modules/accounts/presentation/contexts/profile.context";
import { ListBorders } from "@modules/borders/presentation/components/list-borders";
import { FilterBorders } from "./sections/filter-borders";

export default function Page() {
	const { data } = useProfileContext();

	return (
		<div className="flex flex-col flex-1 gap-14 w-full h-full">
			<FilterBorders />
			{data && (
				<ListBorders
					id={data.id}
					avatarUrl={data.avatar}
					username={data.username}
				/>
			)}
		</div>
	);
}
