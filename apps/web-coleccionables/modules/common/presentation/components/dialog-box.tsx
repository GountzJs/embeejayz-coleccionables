import type React from "react";

interface Props {
	children: React.ReactNode;
	open: boolean;
}

export function DialogBox({ children, open }: Props) {
	return (
		<div
			className={`fixed top-0 left-0 h-screen w-screen bg-black/80 backdrop-blur-sm items-center justify-center gap-6 z-50 ${
				open ? "flex" : "hidden"
			}`}
		>
			{children}
		</div>
	);
}
