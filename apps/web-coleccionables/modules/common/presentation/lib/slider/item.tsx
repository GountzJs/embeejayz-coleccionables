interface Props {
	children: React.ReactNode;
}

export function Item({ children }: Props) {
	return (
		<li
			style={{
				flex: "0 0 100%",
				scrollSnapAlign: "start",
			}}
		>
			{children}
		</li>
	);
}
