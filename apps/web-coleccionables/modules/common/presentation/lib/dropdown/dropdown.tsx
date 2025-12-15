import { createContext, useContext, useEffect, useRef, useState } from "react";

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

	const toggle = () => setIsOpen(!isOpen);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const isClickInside = container.current?.contains(event.target as Node);

			if (!isClickInside && isOpen) setIsOpen(false);
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

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
