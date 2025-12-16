// biome-ignore assist/source/organizeImports: <Auto save import>
import { cdnUrl } from "@/core/settings";
import { useState } from "react";
import { Icon } from "ui-kit";

export function ListPacks() {
	const packs = ["individual", "chico", "mediano", "grande"];
	const [startIndex, setStartIndex] = useState(0);

	const total = packs.length;

	const visiblePacks = [
		packs[(startIndex + 0) % total],
		packs[(startIndex + 1) % total],
		packs[(startIndex + 2) % total],
	];

	const handlePrev = () => {
		setStartIndex((prev) => (prev - 1 + total) % total);
	};

	const handleNext = () => {
		setStartIndex((prev) => (prev + 1) % total);
	};

	return (
		<section className="flex flex-col items-center justify-center gap-5 mt-24 w-full">
			<h1 className="text-4xl font-bold text-center w-full">
				Sobres disponibles
			</h1>
			<div className="flex items-center justify-center px-14 py-6 gap-2 w-fit">
				<button
					type="button"
					className="cursor-pointer transition-transform duration-200 ease-in-out will-change-transform rotate-90 hover:scale-105"
					onClick={handlePrev}
				>
					<Icon name="chevron" color="var(--color-primary)" size="60px" />
				</button>
				{visiblePacks.map((pack, index) => (
					<img
						key={pack}
						src={`${cdnUrl}/images/sobres/${pack}.png`}
						alt={`Pack ${pack}`}
						loading="lazy"
						decoding="async"
						width={index === 1 ? 400 : 300}
						height={index === 1 ? 400 : 300}
						style={{
							objectFit: "contain",
							height: index === 1 ? "400px" : "300px",
							transition: "transform 0.3s",
						}}
					/>
				))}
				<button
					type="button"
					className="cursor-pointer transition-transform duration-200 ease-in-out will-change-transform -rotate-90 hover:scale-105"
					onClick={handleNext}
				>
					<Icon name="chevron" color="var(--color-primary)" size="60px" />
				</button>
			</div>
		</section>
	);
}
