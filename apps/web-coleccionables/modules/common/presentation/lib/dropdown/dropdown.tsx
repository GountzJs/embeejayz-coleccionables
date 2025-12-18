import { createContext, useContext, useRef, useState } from "react";
import { useClickOutsideHook } from "../../hooks/click-outside.hook";

type DropdownContextType = {
	isOpen: boolean;
	toggle: () => void;
};

const DropdownContext = createContext<DropdownContextType>({
	isOpen: false,
	toggle: () => {},
});

interface Props {
	children: React.ReactNode;
}

export const useDropdown = () => useContext(DropdownContext);

export function Provider({ children }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const container = useRef<HTMLDivElement>(null);

	useClickOutsideHook({ ref: container, handler: () => setIsOpen(false) });

	const toggle = () => setIsOpen(!isOpen);

	return (
		<DropdownContext.Provider
			value={{
				isOpen,
				toggle,
			}}
		>
			<div ref={container} className="relative h-full w-full">
				{children}
			</div>
		</DropdownContext.Provider>
	);
}
