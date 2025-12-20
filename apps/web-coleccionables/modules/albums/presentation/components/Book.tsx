interface Props {
	children: React.ReactNode;
}

export function Book({ children }: Props) {
	return (
		<div
			className="w-full h-screen overflow-x-auto px-2 py-4 overflow-y-hidden"
			style={{ perspective: "2500px" }}
		>
			<div
				className="relative h-full inline-block"
				style={{
					minWidth: "calc(100vh * 2400 / 3508 * 2)",
					transformStyle: "preserve-3d",
				}}
			>
				{children}
			</div>
		</div>
	);
}
