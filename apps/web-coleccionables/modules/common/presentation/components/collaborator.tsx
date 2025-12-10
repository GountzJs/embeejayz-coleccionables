import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	name: string;
	avatar: string;
	size?: "small" | "large";
	href: string;
	children?: ReactNode;
}

export function Collaborator({
	name,
	avatar,
	size = "large",
	href,
	children,
	...props
}: Props) {
	const avatarSize = size === "small" ? 40 : 55;

	return (
		<Link
			to={href}
			className="flex flex-col items-center justify-center font-semibold gap-2 w-fit h-fit group"
			{...props}
		>
			<span className="text-white group-hover:text-primary transition-colors duration-300 ease-in-out">
				{children}
			</span>
			<img
				src={avatar}
				alt={name}
				width={avatarSize}
				height={avatarSize}
				loading="lazy"
				decoding="async"
				style={{ willChange: "transform" }}
				className="rounded-full outline-2 outline-white transition-transform duration-300 ease-in-out group-hover:shadow-[0_0_10px_2px_var(--color-secondary)] group-hover:scale-105"
			/>
		</Link>
	);
}
