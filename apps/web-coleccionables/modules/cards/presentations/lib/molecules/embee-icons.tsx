import { CardIcons } from "@/app/embeecards/lib/atoms/card-icons/card-icons";
import { ShacoBoxIcon, ShacoHatIcon } from "@/app/embeecards/lib/atoms/icons";

export function EmbeeIcons() {
  return (
    <CardIcons align="flex-start">
      <ShacoHatIcon size={48} />
      <ShacoBoxIcon size={35} />
    </CardIcons>
  );
}
