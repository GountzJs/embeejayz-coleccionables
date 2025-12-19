import type { EmbeecardEntity } from "../../domain/entities/embeecard.entity";
import { useCardDialogContext } from "../contexts/card-dialog.context";

interface Props extends EmbeecardEntity {
	children: React.ReactNode;
}

export function BtnDialog({
	children,
	quantity,
	name,
	description,
	identify,
	cover,
	category,
}: Props) {
	const { openDialog } = useCardDialogContext();

	return (
		<button
			type="button"
			className="bg-transparent cursor-pointer w-[300px] h-[450px]"
			onClick={() =>
				openDialog({
					quantity,
					name,
					description,
					identify,
					cover,
					category,
				})
			}
		>
			{children}
		</button>
	);
}
