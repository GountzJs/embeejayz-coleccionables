// biome-ignore assist/source/organizeImports: <Autosave import>
import { cdnUrl } from "@/core/settings";
import { type EmbeecardEntity, embeecardCategory } from "@embeejayz/core-cards";
import {
	CardEmbee,
	CardLolesports,
	CardSpecial,
	CardT1,
	CardTroll,
} from "@embeejayz/ui-cards";

const CardComponent = (props: EmbeecardEntity) => {
	switch (props.category) {
		case embeecardCategory.lolesports:
			return <CardLolesports {...props} cdnUrl={cdnUrl} />;
		case embeecardCategory.embee:
			return <CardEmbee {...props} cdnUrl={cdnUrl} />;
		case embeecardCategory.troll:
			return <CardTroll {...props} cdnUrl={cdnUrl} />;
		case embeecardCategory.t1:
			return <CardT1 {...props} cdnUrl={cdnUrl} />;
		default:
			return <CardSpecial {...props} cdnUrl={cdnUrl} />;
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
