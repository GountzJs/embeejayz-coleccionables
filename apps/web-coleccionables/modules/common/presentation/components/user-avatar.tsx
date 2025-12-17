interface Props {
	url: string;
	size: number;
}

export function UserAvatar({ url, size }: Props) {
	return (
		<img
			src={url}
			alt="Avatar user"
			loading="lazy"
			decoding="async"
			width={size}
			height={size}
			style={{
				objectFit: "contain",
				width: size,
				height: size,
			}}
		/>
	);
}
