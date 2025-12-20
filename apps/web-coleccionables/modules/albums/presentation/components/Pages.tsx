interface PageFrontProps {
	nextPage: () => void;
	children: React.ReactNode;
}

export function PageFront({ nextPage, children }: PageFrontProps) {
	return (
		<button
			type="button"
			className="bg-white absolute inset-0 flex items-center justify-center border-2 cursor-pointer border-gray-200"
			style={{ backfaceVisibility: "hidden" }}
			onClick={nextPage}
		>
			{children}
		</button>
	);
}

interface PageBackProps {
	prevPage: () => void;
	children: React.ReactNode;
}

export function PageBack({ prevPage, children }: PageBackProps) {
	return (
		<button
			type="button"
			className="bg-white absolute inset-0 flex items-center justify-center cursor-pointer border-2 border-gray-200 "
			style={{
				backfaceVisibility: "hidden",
				transform: "rotateY(180deg)",
			}}
			onClick={prevPage}
		>
			{children}
		</button>
	);
}
