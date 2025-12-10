import type { DetailedHTMLProps } from "react";

interface Props
	extends DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

export function InputOutline({ ...props }: Props) {
	return (
		<input
			{...props}
			className="bg-gray-ultra-dark rounded-sm text-sm px-4 py-2 outline outline-gray-light placeholder:font-semibold focus:outline-white focus:outline-2 w-full"
		/>
	);
}
