import { CardIcons } from "../atoms/card-icons";
import { ShacoBoxIcon, ShacoHatIcon } from "../atoms/icons";

export function EmbeeIcons() {
	return (
		<CardIcons align="flex-start">
			<ShacoHatIcon size={48} />
			<ShacoBoxIcon size={35} />
		</CardIcons>
	);
}
