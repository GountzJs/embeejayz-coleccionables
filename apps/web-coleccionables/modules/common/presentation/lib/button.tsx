import type { DetailedHTMLProps } from "react";

interface Props
	extends DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {}

export function Button({ children, ...props }: Props) {
	return (
		<button
			{...props}
			className="bg-ultra-dark cursor-pointer font-semibold outline-2 outline-primary px-6 py-2 rounded-md text-sm hover:scale-105 duration-200 transition-transform will-change-transform"
			style={{
				boxShadow: "rgba(226, 1, 45, 0.2) 0px 0px 40px 10px",
			}}
		>
			{children}
		</button>
	);
}
