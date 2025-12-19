import { CardIcons } from "@/app/embeecards/lib/atoms/card-icons/card-icons";
import { ShurimaIcon, XerathIcon } from "@/app/embeecards/lib/atoms/icons";

export function SpecialIcons() {
  return (
    <CardIcons align="flex-start">
      <ShurimaIcon size={40} />
      <XerathIcon size={36} style={{ marginTop: "2px" }} />
    </CardIcons>
  );
}
