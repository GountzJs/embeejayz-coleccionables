import * as Slider from "@modules/common/presentation/lib/slider";
import { EmbeeBorders } from "./sections/borders";
import { EmbeeCards } from "./sections/cards";
import { Presentation } from "./sections/presentation";

export default function Page() {
	return (
		<main className="flex items-center gap-4 justify-center w-full min-h-[calc(100vh-85px)] px-mobile md:px-tablet lg:px-desktop">
			<Slider.Provider>
				<Slider.Box>
					<Slider.Item key="0">
						<Presentation />
					</Slider.Item>

					<Slider.Item key="1">
						<EmbeeCards />
					</Slider.Item>

					<Slider.Item key="2">
						<EmbeeBorders />
					</Slider.Item>

					<Slider.Dots length={3} />
				</Slider.Box>
			</Slider.Provider>
		</main>
	);
}
