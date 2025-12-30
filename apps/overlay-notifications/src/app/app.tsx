import styled from "styled-components";
import { HandlerTwitchMessages } from "./components/handler-messages";
import { PreviewPacks } from "./components/preview-packs/preview-packs";
import { ViewPack } from "./components/view-pack";
import { PacksProvider } from "./contexts/packs/packs.provider";
import { TwitchProvider } from "./contexts/twitch/twitch.provider";

const Container = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	width: 100%;
`;

export function App() {
	return (
		<Container>
			<TwitchProvider>
				<PacksProvider>
					<HandlerTwitchMessages>
						<PreviewPacks />
						<ViewPack />
					</HandlerTwitchMessages>
				</PacksProvider>
			</TwitchProvider>
		</Container>
	);
}
