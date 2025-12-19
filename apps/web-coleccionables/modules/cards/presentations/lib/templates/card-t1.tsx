import { cdnUrl } from "@/core/settings";
import type { EmbeecardEntity } from "../../../domain/entities/embeecard.entity";
import { CardBox } from "../atoms/card-box/card-box";
import { CardContent } from "../atoms/card-content/card-content";
import { CardCover } from "../atoms/card-cover/card-cover";
import { CardDescription } from "../atoms/card-description/card-description";
import { CardGradient } from "../atoms/card-gradient";
import { CardMark } from "../atoms/card-mark";
import { CardNumber } from "../atoms/card-number/card-number";
import { CardPosition } from "../atoms/card-position/card-position";
import { CardTitle } from "../atoms/card-title/card-title";
import { cardPallet } from "../consts/colors";
import { StarRanking } from "../molecules/star-ranking/star-ranking";
import { T1Icons } from "../molecules/t1-icons";

export function CardT1({
	name,
	cover,
	description,
	identify,
	quantity,
}: EmbeecardEntity) {
	const dark = cardPallet.t1.dark;
	const light = cardPallet.t1.light;

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
				<T1Icons />
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
