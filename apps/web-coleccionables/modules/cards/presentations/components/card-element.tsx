import { type EmbeecardEntity, embeecardCategory } from "@embeejayz/core-cards";

import { CardEmbee } from "../lib/templates/card-embee";
import { CardLolesports } from "../lib/templates/card-lolesports";
import { CardSpecial } from "../lib/templates/card-special";
import { CardT1 } from "../lib/templates/card-t1";
import { CardTroll } from "../lib/templates/card-troll";

const CardComponent = (props: EmbeecardEntity) => {
	switch (props.category) {
		case embeecardCategory.lolesports:
			return <CardLolesports {...props} />;
		case embeecardCategory.embee:
			return <CardEmbee {...props} />;
		case embeecardCategory.troll:
			return <CardTroll {...props} />;
		case embeecardCategory.t1:
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
