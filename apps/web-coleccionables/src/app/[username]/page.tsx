import { useProfileContext } from "@modules/accounts/presentation/contexts/profile.context";
import { ListBorders } from "@modules/borders/presentation/components/list-borders";
import { DialogSpellContextProvider } from "@modules/borders/presentation/contexts/dialog-spell.context";
import { SpellsContextProvider } from "@modules/borders/presentation/contexts/spells.context";
import { FilterBorders } from "./sections/filter-borders";

export default function Page() {
	const { data } = useProfileContext();

	return (
		<div className="flex flex-col flex-1 gap-14 w-full h-full">
			<SpellsContextProvider>
				<DialogSpellContextProvider>
					<FilterBorders />
					{data && (
						<ListBorders
							id={data.id}
							avatarUrl={data.avatar}
							username={data.username}
						/>
					)}
				</DialogSpellContextProvider>
			</SpellsContextProvider>
		</div>
	);
}
