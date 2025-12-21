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
import { StarIcon } from "../atoms/icons";
import embeecardPallet from "../consts/embeecard-pallet";
import { SpecialIcons } from "../molecules/special-icons";

interface Props extends EmbeecardEntity {
	cdnUrl: string;
}

export function CardSpecial({
	name,
	description,
	identify,
	cover,
	cdnUrl,
}: Props) {
	const dark = embeecardPallet.special.dark;
	const light = embeecardPallet.special.light;

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
