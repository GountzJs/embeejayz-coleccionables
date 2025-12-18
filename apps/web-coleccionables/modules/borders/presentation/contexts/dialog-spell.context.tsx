import { createContext, useContext, useState } from "react";

export interface DialogSpellContextType {
	icon: "left" | "right";
	open: boolean;
	openDialog: (icon: "left" | "right") => void;
	closeDialog: () => void;
}

const DialogSpellContext = createContext<DialogSpellContextType>({
	icon: "left",
	open: false,
	openDialog: () => {},
	closeDialog: () => {},
});

export const useDialogSpellContext = () => {
	return useContext(DialogSpellContext);
};

interface Props {
	children: React.ReactNode;
}

export function DialogSpellContextProvider({ children }: Props) {
	const [icon, setIcon] = useState<"left" | "right">("left");
	const [open, setOpen] = useState(false);

	const openDialog = (icon: "left" | "right") => {
		setIcon(icon);
		setOpen(true);
	};

	const closeDialog = () => setOpen(false);

	return (
		<DialogSpellContext.Provider
			value={{
				icon,
				open,
				openDialog,
				closeDialog,
			}}
		>
			{children}
		</DialogSpellContext.Provider>
	);
}
