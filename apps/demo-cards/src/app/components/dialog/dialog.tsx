import { useDialog } from "./context/dialog.provider";

interface Props {
	children: React.ReactNode;
}

export function Dialog({ children }: Props) {
	const { isOpen } = useDialog();

	return (
		<div
			className={`bg-[rgba(0,0,0,0.5)] backdrop-blur-xs ${isOpen ? "flex" : "hidden"} items-center justify-center fixed top-0 right-0 left-0 w-full h-full`}
		>
			<div>{children}</div>
		</div>
	);
}
