interface Props {
	children: React.ReactNode;
}

export function PriceTitle({ children }: Props) {
	return (
		<h2 className="font-bold text-lg text-center mb-1 w-full">{children}</h2>
	);
}
