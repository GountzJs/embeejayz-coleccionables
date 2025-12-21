import { CardIcons } from "../atoms/card-icons";
import { CupIcon, T1Icon } from "../atoms/icons";

export function T1Icons() {
	return (
		<CardIcons>
			<T1Icon size={50} style={{ marginTop: "8px" }} />
			<CupIcon size={24} />
		</CardIcons>
	);
}
