import { CardIcons } from "../atoms/card-icons";
import { HongoIcon, TeemoIcon } from "../atoms/icons";

export function TrollIcons() {
	return (
		<CardIcons align="flex-start">
			<TeemoIcon size={48} style={{ marginTop: "2px" }} />
			<HongoIcon size={36} style={{ marginTop: "2px" }} />
		</CardIcons>
	);
}
