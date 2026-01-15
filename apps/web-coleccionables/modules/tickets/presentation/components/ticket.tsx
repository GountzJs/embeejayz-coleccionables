// biome-ignore assist/source/organizeImports: Autosave import
import { cdnUrl } from "@/core/settings";
import dayjs from "dayjs";
import { useState } from "react";
import { TicketTilt } from "./ticket-tilt";

interface Props {
	username: string;
	frontUrl: string;
	avatar: string;
	date: string;
	hourArg: string;
	hourMx: string;
	team?: string;
	dateFollow: string | null;
}

export function Ticket({
	username,
	frontUrl,
	avatar,
	date,
	hourArg,
	hourMx,
	team,
	dateFollow,
}: Props) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<TicketTilt perspective={2500}>
			<button
				type="button"
				className={`relative transition-transform duration-800 cursor-pointer w-62.5 h-87.5 ${
					isFlipped ? "rotate-y-180" : ""
				}`}
				style={{
					transformStyle: "preserve-3d",
				}}
				onClick={handleClick}
			>
				<div className="absolute top-0 left-0 flex h-full w-full backface-hidden rounded-md shadow-[0_10px_20px_rgba(0, 0, 0, 0.2)]">
					<img
						src={`${cdnUrl}${frontUrl}`}
						alt="Front"
						className="w-full h-full object-cover rounded-lg"
					/>
					<div className="absolute flex flex-col justify-end items-center gap-1.5 left-1/2 -translate-1/2 -bottom-10 w-50">
						<div className="flex items-end justify-center w-50">
							<div className="flex flex-col items-center gap-0.5 w-fit">
								<p className="text-xs font-semibold text-white">{date}</p>
								<div className="flex items-center justify-center gap-1">
									<div className="flex items-center justify-center w-fit h-fit gap-0.5">
										<p className="text-white font-semibold text-sm uppercase">
											{hourMx}
										</p>
										<img
											src="/countries/mexico.png"
											alt="Bandera mexico"
											width={24}
											height={14}
										/>
									</div>
									<div className="flex items-center justify-center w-fit h-fit gap-0.5">
										<p className="text-white font-semibold text-sm uppercase">
											{hourArg}
										</p>
										<img
											src="/countries/arg.png"
											alt="Bandera argentina"
											width={22}
											height={14}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col w-50">
							<p className="bg-[#0C0532] text-white flex items-center justify-center font-black text-[12px] uppercase py-1 rounded-tl-md rounded-tr-md w-full">
								{username}
							</p>
							<div className="bg-white flex items-center justify-center gap-2.5 p-2 rounded-bl-md rounded-br-md text-black">
								<img
									src={avatar}
									className="rounded-full"
									alt="Avatar User"
									width={30}
									height={30}
								/>
								<div className="flex flex-col justify-center w-full h-fit">
									<p className="text-left text-[10px] font-regular text-black/80 w-full">
										Siguiendo:{" "}
										<b className="text-black font-semibold">
											{dateFollow ? dayjs(dateFollow).format("DD/MM/YY") : "?"}
										</b>
									</p>
									<p className="text-left text-[10px] font-regular text-black/80 w-full">
										Fan de:{" "}
										<b className="text-black font-semibold">{team || "?"}</b>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute top-0 left-0 h-full w-full backface-hidden rounded-md shadow-[0_10px_20px_rgba(0, 0, 0, 0.2)] rotate-y-180">
					<img
						src={`${cdnUrl}/tickets/lck-cup-2026/back.png`}
						alt="Back"
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
			</button>
		</TicketTilt>
	);
}
