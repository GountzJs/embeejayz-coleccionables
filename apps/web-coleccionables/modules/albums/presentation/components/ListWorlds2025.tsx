/** biome-ignore-all lint/complexity/noUselessFragments: ignore frames empty */
import { useState } from "react";
import { Page100T, Page100TBack } from "../lib/templates/100T";
import { PageAL, PageALBack } from "../lib/templates/AL";
import { PageBLG, PageBLGBack } from "../lib/templates/BLG";
import { PageCFO, PageCFOBack } from "../lib/templates/CFO";
import { PageFLY, PageFLYBack } from "../lib/templates/FLY";
import { PageFNC, PageFNCBack } from "../lib/templates/FNC";
import { PageG2, PageG2Back } from "../lib/templates/G2";
import { PageGEN, PageGENBack } from "../lib/templates/GEN";
import { PageHLE, PageHLEBack } from "../lib/templates/HLE";
import { PageIG, PageIGBack } from "../lib/templates/IG";
import { PageKOI, PageKOIBack } from "../lib/templates/KOI";
import { PageKT, PageKTBack } from "../lib/templates/KT";
import { Portada } from "../lib/templates/Portada";
import { PagePSG, PagePSGBack } from "../lib/templates/PSG";
import { PageT1, PageT1Back } from "../lib/templates/T1";
import { PageTES, PageTESBack } from "../lib/templates/TES";
import { PageTSW, PageTSWBack } from "../lib/templates/TSW";
import { PageVKS, PageVKSBack } from "../lib/templates/VKS";
import { Book } from "./Book";
import { PageBack, PageFront } from "./Pages";
import { Paper } from "./Paper";

export function ListWorlds2025() {
	const [currentPage, setCurrentPage] = useState(0);
	const totalPages = 19;

	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div className="bg-gray-950 flex items-center justify-center select-none h-full w-full">
			<Book>
				<Paper currentPage={currentPage} page={0}>
					<PageFront nextPage={nextPage}>
						<Portada />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageGEN />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={1}>
					<PageFront nextPage={nextPage}>
						<PageGENBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageHLE />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={2}>
					<PageFront nextPage={nextPage}>
						<PageHLEBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageKT />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={3}>
					<PageFront nextPage={nextPage}>
						<PageKTBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageT1 />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={4}>
					<PageFront nextPage={nextPage}>
						<PageT1Back />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageBLG />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={5}>
					<PageFront nextPage={nextPage}>
						<PageBLGBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageAL />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={6}>
					<PageFront nextPage={nextPage}>
						<PageALBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageTES />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={7}>
					<PageFront nextPage={nextPage}>
						<PageTESBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageIG />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={8}>
					<PageFront nextPage={nextPage}>
						<PageIGBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageFLY />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={9}>
					<PageFront nextPage={nextPage}>
						<PageFLYBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageVKS />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={10}>
					<PageFront nextPage={nextPage}>
						<PageVKSBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<Page100T />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={11}>
					<PageFront nextPage={nextPage}>
						<Page100TBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageG2 />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={12}>
					<PageFront nextPage={nextPage}>
						<PageG2Back />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageKOI />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={13}>
					<PageFront nextPage={nextPage}>
						<PageKOIBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageFNC />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={14}>
					<PageFront nextPage={nextPage}>
						<PageFNCBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageCFO />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={15}>
					<PageFront nextPage={nextPage}>
						<PageCFOBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PageTSW />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={16}>
					<PageFront nextPage={nextPage}>
						<PageTSWBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<PagePSG />
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={17}>
					<PageFront nextPage={nextPage}>
						<PagePSGBack />
					</PageFront>
					<PageBack prevPage={prevPage}>
						<></>
					</PageBack>
				</Paper>

				<Paper currentPage={currentPage} page={18}>
					<PageFront nextPage={nextPage}>
						<></>
					</PageFront>
					<PageBack prevPage={prevPage}>
						<div
							className="absolute inset-0 bg-[url('/contraportada.png')] bg-no-repeat bg-contain bg-center w-full h-full"
							style={{
								transform: "rotateY(180deg) scaleX(-1)",
							}}
						></div>
					</PageBack>
				</Paper>
			</Book>
		</div>
	);
}
