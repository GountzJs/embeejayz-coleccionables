import { cdnUrl } from "@/core/settings";

export function PriceIlustration() {
	return (
		<div className="bg-gray-dark rounded-full overflow-hidden h-[280px] w-[280px]">
			<img
				src={`${cdnUrl}/cards/embeejayz/embee/embee-donation.png`}
				alt="Embee Shaco circulo avatar"
				width={280}
				height={280}
				loading="eager"
				decoding="sync"
			/>
		</div>
	);
}
