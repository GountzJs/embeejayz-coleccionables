import type { EmbeecardEntity } from "@modules/cards/domain/entities/embeecard.entity";
import { CardCategory } from "../lib/models";
import { CardEmbee } from "../lib/templates/card-embee";
import { CardLolesports } from "../lib/templates/card-lolesports";
import { CardSpecial } from "../lib/templates/card-special";
import { CardT1 } from "../lib/templates/card-t1";
import { CardTroll } from "../lib/templates/card-troll";

const CardComponent = (props: EmbeecardEntity) => {
	switch (props.category) {
		case CardCategory.Lolesports:
			return <CardLolesports {...props} />;
		case CardCategory.Embee:
			return <CardEmbee {...props} />;
		case CardCategory.Troll:
			return <CardTroll {...props} />;
		case CardCategory.T1:
			return <CardT1 {...props} />;
		default:
			return <CardSpecial {...props} />;
	}
};

export function CardElement({
	category,
	name,
	cover,
	description,
	quantity,
	identify,
}: EmbeecardEntity) {
	return (
		<CardComponent
			category={category}
			name={name}
			cover={cover}
			description={description}
			identify={identify}
			quantity={quantity}
		/>
	);
}
