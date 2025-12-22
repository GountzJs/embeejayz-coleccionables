import { Icon } from "@embeejayz/ui-kit";
import { useDropdown } from "./dropdown";

interface Props {
	children: React.ReactNode;
}

export function Toggle({ children }: Props) {
	const { toggle, isOpen } = useDropdown();

	return (
		<button
			type="button"
			className="flex items-center gap-2 text-white opacity-80 hover:opacity-100 transition-opacity duration-150 font-semibold text-xl cursor-pointer relative w-fit h-fit"
			onClick={toggle}
		>
			{children}
			<div
				className="flex w-fit h-fit transition-transform duration-150"
				style={{ transform: isOpen ? "rotate(-90deg)" : "rotate(0deg)" }}
			>
				<Icon name="chevron" color="#fff" size="20px" />
			</div>
		</button>
	);
}
