import { useState } from "react";
import type { EmbeecardEntity } from "../../../domain/entities/embeecard.entity";
import { CardCategory } from "../../lib/models";
import { CardEffect } from "../card-effect/card-effect";
import { CardElement } from "../card-element";
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
					ranking={card.category === CardCategory.Special ? 5 : card.quantity}
				>
					<CardElement
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
