import { createContext, useContext, useState } from "react";

interface PropsContext {
	isOpen: boolean;
	changeOpen: (open: boolean) => void;
}

const DialogContext = createContext<PropsContext>({
	isOpen: false,
	changeOpen: () => {},
});

export const useDialog = () => useContext(DialogContext);

interface Props {
	children: React.ReactNode;
}

export function DialogProvider({ children }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const changeOpen = (value: boolean) => setIsOpen(value);

	return (
		<DialogContext.Provider value={{ isOpen, changeOpen }}>
			{children}
		</DialogContext.Provider>
	);
}
