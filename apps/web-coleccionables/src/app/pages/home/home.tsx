import * as Slider from "@modules/common/presentation/lib/slider";
import { EmbeeBorders } from "./_sections/EmbeeBorders";
import { EmbeeCards } from "./_sections/EmbeeCards";
import { Presentation } from "./_sections/Presentation";

export default function Page() {
	return (
		<main className="flex items-center gap-4 justify-center w-full min-h-[calc(100vh-75px)] px-mobile md:px-tablet lg:px-desktop">
			<Slider.Provider>
				<Slider.Box>
					<Slider.Item key="0">
						<Presentation />
					</Slider.Item>

					<Slider.Item key="1">
						<EmbeeBorders />
					</Slider.Item>

					<Slider.Item key="2">
						<EmbeeCards />
					</Slider.Item>
					<Slider.Dots length={3} />
				</Slider.Box>
			</Slider.Provider>
		</main>
	);
}
