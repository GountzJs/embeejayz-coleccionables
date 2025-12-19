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
import { LolesportsIcons } from "@/app/embeecards/lib/molecules/lolesports-icons";
import { StarRanking } from "@/app/embeecards/lib/molecules/star-ranking/star-ranking";
import { CardEntity } from "../../models/entities/card.entity";

export function CardLolesports({
  name,
  cover,
  description,
  identify,
  quantity,
}: CardEntity) {
  const dark = cardPallet.lolesports.dark;
  const light = cardPallet.lolesports.light;

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
        <LolesportsIcons />
      </CardPosition>

      <CardPosition position={4}>
        <StarRanking quantity={quantity} color={light} />
      </CardPosition>

      <CardPosition position={5}>
        <CardContent>
          <CardTitle color={light} content={name} />
          <CardCover url={`${cdnUrl}${cover}`} />
          <CardDescription color={dark} content={description} />
        </CardContent>
      </CardPosition>
    </CardBox>
  );
}
