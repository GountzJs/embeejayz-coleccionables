import { Link } from "react-router";
import { Icon } from "ui-kit";

export function EmbeeLink() {
	return (
		<Link
			to="https://www.twitch.tv/embeejayz"
			target="_blank"
			rel="noopener noreferrer"
			className="bg-purple flex items-center gap-2 font-semibold text-lg text-white rounded-lg py-3 hover:scale-105 transition-transform duration-300 px-6 h-fit w-fit will-change-transform"
		>
			<Icon name="twitch" color="white" size="20px" />
			Embeejayz
		</Link>
	);
}
