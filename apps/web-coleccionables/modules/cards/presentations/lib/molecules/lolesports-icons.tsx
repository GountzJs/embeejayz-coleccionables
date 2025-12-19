import { CardIcons } from "@/app/embeecards/lib/atoms/card-icons/card-icons";
import { DragonIcon, MapIcon } from "@/app/embeecards/lib/atoms/icons";

export function LolesportsIcons() {
  return (
    <CardIcons>
      <MapIcon size={30} />
      <DragonIcon size={40} style={{ marginTop: "2px" }} />
    </CardIcons>
  );
}
