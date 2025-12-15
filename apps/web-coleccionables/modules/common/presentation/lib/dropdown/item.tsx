import { Link } from "react-router";

interface Props {
	children: React.ReactNode;
	to: string;
}

export function Item({ children, to }: Props) {
	return (
		<Link
			to={to}
			className="flex items-center gap-2 p-2 h-fit w-full rounded-md text-white font-semibold bg-gray-950 hover:bg-gray-800 transition-colors duration-200"
		>
			{children}
		</Link>
	);
}
