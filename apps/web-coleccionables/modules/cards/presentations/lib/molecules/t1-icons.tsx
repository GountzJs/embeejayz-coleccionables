import { CardIcons } from "../atoms/card-icons/card-icons";
import { CupIcon, T1Icon } from "../atoms/icons";

export function T1Icons() {
	return (
		<CardIcons>
			<T1Icon size={50} />
			<CupIcon size={24} style={{ marginTop: "2px" }} />
		</CardIcons>
	);
}
