import { CardIcons } from "../atoms/card-icons";
import { ShurimaIcon, XerathIcon } from "../atoms/icons";

export function SpecialIcons() {
	return (
		<CardIcons align="flex-start">
			<ShurimaIcon size={40} />
			<XerathIcon size={36} style={{ marginTop: "2px" }} />
		</CardIcons>
	);
}
