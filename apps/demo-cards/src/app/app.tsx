import { cdnUrl } from "@/core/settings";
import { DialogPack } from "./components/dialog-pack";
import { DialogProvider } from "./components/dialog/context/dialog.provider";
import { FloatElement } from "./components/float-element";
import { ListPacks } from "./components/list-packs";

export function App() {
	return (
		<div className="text-white font-poppins flex flex-col flex-1 py-14 px-20 gap-12 h-full w-full">
			<header className="flex flex-col items-center justify-center gap-4 w-full">
				<img
					src={`${cdnUrl}/images/banner/cards.png`}
					alt="Embeecards"
					loading="eager"
					decoding="async"
					width={240}
					height={240}
					style={{
						aspectRatio: "325/213",
					}}
				/>
				<h1 className="font-black text-4xl w-full text-center ">Embeecards</h1>
			</header>
			<FloatElement />
			<DialogProvider>
				<ListPacks />
				<DialogPack />
			</DialogProvider>
		</div>
	);
}
