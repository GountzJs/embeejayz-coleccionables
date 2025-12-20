import { useProfileContext } from "@modules/accounts/presentation/contexts/profile.context";
import { ListWorlds2025 } from "@modules/albums/presentation/components/ListWorlds2025";
import { StickersProvider } from "@modules/albums/presentation/contexts/stickers.provider";

export default function Page() {
	const { data } = useProfileContext();

	if (!data) {
		return null;
	}

	return (
		<div className="flex w-full h-full">
			<StickersProvider id={data.id}>
				<ListWorlds2025 />
			</StickersProvider>
		</div>
	);
}
