import { CardIcons } from "@/app/embeecards/lib/atoms/card-icons/card-icons";
import { HongoIcon, TeemoIcon } from "@/app/embeecards/lib/atoms/icons";

export function TrollIcons() {
  return (
    <CardIcons align="flex-start">
      <TeemoIcon size={48} style={{ marginTop: "2px" }} />
      <HongoIcon size={36} style={{ marginTop: "2px" }} />
    </CardIcons>
  );
}
