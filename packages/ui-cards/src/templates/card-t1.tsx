import type { EmbeecardEntity } from "@embeejayz/core-cards";
import { CardBox } from "../atoms/card-box";
import { CardContent } from "../atoms/card-content";
import { CardCover } from "../atoms/card-cover";
import { CardDescription } from "../atoms/card-description";
import { CardGradient } from "../atoms/card-gradient";
import { CardMark } from "../atoms/card-mark";
import { CardNumber } from "../atoms/card-number";
import { CardPosition } from "../atoms/card-position";
import { CardTitle } from "../atoms/card-title";
import embeecardPallet from "../consts/embeecard-pallet";
import { StarRanking } from "../molecules/star-ranking";
import { T1Icons } from "../molecules/t1-icons";

interface Props extends EmbeecardEntity {
	cdnUrl: string;
}

export function CardT1({
	name,
	cover,
	description,
	identify,
	quantity,
	cdnUrl,
}: Props) {
	const dark = embeecardPallet.t1.dark;
	const light = embeecardPallet.t1.light;

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
