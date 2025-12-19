import { cdnUrl } from "@/app/core/settings";
import { CardBox } from "@/app/embeecards/lib/atoms/card-box/card-box";
import { CardContent } from "@/app/embeecards/lib/atoms/card-content/card-content";
import { CardCover } from "@/app/embeecards/lib/atoms/card-cover/card-cover";
import { CardDescription } from "@/app/embeecards/lib/atoms/card-description/card-description";
import { CardGradient } from "@/app/embeecards/lib/atoms/card-gradient";
import { CardMark } from "@/app/embeecards/lib/atoms/card-mark";
import { CardNumber } from "@/app/embeecards/lib/atoms/card-number/card-number";
import { CardPosition } from "@/app/embeecards/lib/atoms/card-position/card-position";
import { CardTitle } from "@/app/embeecards/lib/atoms/card-title/card-title";
import { cardPallet } from "@/app/embeecards/lib/consts/colors";
import { CardEntity } from "../../models/entities/card.entity";
import { StarIcon } from "../atoms/icons";
import { SpecialIcons } from "../molecules/special-icons";

export function CardSpecial({
  name,
  description,
  identify,
  cover,
}: CardEntity) {
  const dark = cardPallet.special.dark;
  const light = cardPallet.special.light;

  return (
    <CardBox>
      <CardPosition position={0}>
        <CardGradient color={dark} />
      </CardPosition>

      <CardPosition position={1}>
        <CardMark color={light} />
      </CardPosition>

      <CardPosition position={2}>
        <CardNumber identifier={identify} />
      </CardPosition>

      <CardPosition position={3}>
        <SpecialIcons />
      </CardPosition>

      <CardPosition position={4}>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row-reverse",
            listStyle: "none",
            margin: 0,
            padding: 0,
            width: "100%",
            height: "fit-content",
            marginTop: "34px",
          }}
        >
          <StarIcon size={34} isComplete color={light} />
        </div>
      </CardPosition>

      <CardPosition position={5}>
        <CardContent paddingTop="78px">
          <CardTitle color={light} content={name} />
          <CardCover url={`${cdnUrl}${cover}`} />
          <CardDescription color={dark} content={description} />
        </CardContent>
      </CardPosition>
    </CardBox>
  );
}
