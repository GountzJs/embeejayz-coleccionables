interface Props {
	team: string;
}

export function SlotHorizontal({ team }: Props) {
	return (
		<div
			className="bg-red-900 border-4 border-black flex items-center justify-center w-[60%]"
			style={{
				clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)",
				aspectRatio: "350 / 250",
			}}
		>
			<p className="text-white text-4xl font-bold">{team} 1</p>
		</div>
	);
}
