import { useGetAllRankingQuery } from "../queries/get-stickers.query";
import { StickersContext } from "./stickers.context";

interface Props {
	children: React.ReactNode;
	id: string;
}

export const StickersProvider = ({ children, id }: Props) => {
	const { data: stickers, isLoading } = useGetAllRankingQuery({
		id,
	});

	return (
		<StickersContext.Provider value={{ stickers: stickers || [], isLoading }}>
			{children}
		</StickersContext.Provider>
	);
};
