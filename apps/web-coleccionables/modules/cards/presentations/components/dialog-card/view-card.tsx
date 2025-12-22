// biome-ignore assist/source/organizeImports: <Autosave import>
import { cdnUrl } from "@/core/settings";
import { type EmbeecardEntity, embeecardCategory } from "@embeejayz/core-cards";
import { CardElement } from "@embeejayz/ui-cards";
import { useState } from "react";
import { CardEffect } from "../card-effect/card-effect";
import { CardTilt } from "../card-tilt";

interface ViewCardProps {
	card: EmbeecardEntity;
	elementRef: React.RefObject<HTMLDivElement | null>;
}

export function ViewCard({ card, elementRef }: ViewCardProps) {
	const [tilt, setTilt] = useState({ x: 0, y: 0 });

	return (
		<div ref={elementRef}>
			<CardTilt
				maxTilt={15}
				perspective={1200}
				onTiltChange={(x, y) => setTilt({ x, y })}
			>
				<CardEffect
					tiltX={tilt.x}
					tiltY={tilt.y}
					ranking={
						card.category === embeecardCategory.special ? 5 : card.quantity
					}
				>
					<CardElement
						cdnUrl={cdnUrl}
						category={card.category}
						name={card.name}
						cover={card.cover}
						description={card.description}
						quantity={card.quantity}
						identify={card.identify}
					/>
				</CardEffect>
			</CardTilt>
		</div>
	);
}
