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
import { StarIcon } from "../atoms/icons";
import { cardPallet } from "../consts/colors";
import { SpecialIcons } from "../molecules/special-icons";

export function CardSpecial({
	name,
	description,
	identify,
	cover,
}: EmbeecardEntity) {
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
