import { CardIcons } from "@/app/embeecards/lib/atoms/card-icons/card-icons";
import { CupIcon, T1Icon } from "@/app/embeecards/lib/atoms/icons";

export function T1Icons() {
  return (
    <CardIcons>
      <T1Icon size={50} />
      <CupIcon size={24} style={{ marginTop: "2px" }} />
    </CardIcons>
  );
}
