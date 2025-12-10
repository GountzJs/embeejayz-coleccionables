import { cdnUrl } from "@/core/settings";

interface Props {
	type: "purple" | "green";
	quantity: number;
}

export function DetailBits({ type, quantity }: Props) {
	return (
		<div className="flex items-center flex-col gap-0.5 w-fit h-fit">
			<img
				src={`${cdnUrl}/images/icons/bits-${type}.png`}
				width={24}
				height={type === "purple" ? 31 : 24}
				loading="lazy"
				decoding="async"
				alt="Bit Icon"
			/>
			<p
				className="font-regular text-lg"
				style={{ color: type === "purple" ? "#d763ff" : "#00a192" }}
			>
				{quantity}
			</p>
		</div>
	);
}
