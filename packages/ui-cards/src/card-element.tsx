import { type EmbeecardEntity, embeecardCategory } from "@embeejayz/core-cards";
import { CardEmbee } from "./templates/card-embee";
import { CardLolesports } from "./templates/card-lolesports";
import { CardSpecial } from "./templates/card-special";
import { CardT1 } from "./templates/card-t1";
import { CardTroll } from "./templates/card-troll";

interface Props extends EmbeecardEntity {
	cdnUrl: string;
}

const CardComponent = (props: Props) => {
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
	cdnUrl,
	category,
	name,
	cover,
	description,
	quantity,
	identify,
}: Props) {
	return (
		<CardComponent
			cdnUrl={cdnUrl}
			category={category}
			name={name}
			cover={cover}
			description={description}
			identify={identify}
			quantity={quantity}
		/>
	);
}
