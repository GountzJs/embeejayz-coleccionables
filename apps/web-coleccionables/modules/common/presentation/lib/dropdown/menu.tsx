import { useDropdown } from "./dropdown";

interface Props {
	children: React.ReactNode;
}

export function Menu({ children }: Props) {
	const { isOpen } = useDropdown();

	return (
		<div
			className={`bg-gray-950 rounded-md shadow-md shadow-gray-900 absolute p-2 flex flex-col gap-1 left-0 top-full translate-y-1 w-full z-10 ${isOpen ? "visible" : "invisible pointer-events-none"}`}
		>
			{children}
		</div>
	);
}
