// biome-ignore assist/source/organizeImports: Autosave import
import * as Dialog from "@/app/components/dialog";
import { cdnUrl } from "@/core/settings";
import { AnimatePack } from "@embeejayz/ui-cards";
import { usePack } from "../contexts/pack/pack.context";
import { useDialog } from "./dialog/context/dialog.provider";

export function DialogPack() {
	const { cards } = usePack();
	const { isOpen } = useDialog();

	return (
		<Dialog.Box>
			{/* <ul>
				{cards.map(({ name, category, cover, description, identify }) => (
					<CardElement
						key={name}
						cdnUrl={cdnUrl}
						category={category}
						name={name}
						cover={cover}
						description={description}
						quantity={1}
						identify={identify}
					/>
				))}
			</ul> */}
			{isOpen && <AnimatePack cdnUrl={cdnUrl} />}
		</Dialog.Box>
	);
}
