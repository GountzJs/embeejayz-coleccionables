// biome-ignore assist/source/organizeImports: Auto save organization
import { cdnUrl } from "@/app/core/settings";
import { Link } from "react-router";
import { Icon } from "ui-kit";

export function Presentation() {
	return (
		<section className="flex items-center md:justify-center flex-col 2xl:flex-row-reverse gap-8 py-4 pb-14 2xl:py-4 h-full w-full">
			<img
				className="object-contain aspect-square w-[400px] max-w-3/4"
				src={`${cdnUrl}/images/svgs/embee-worlds.svg`}
				alt="Ilustración embeejayz"
				width={500}
				height={500}
				loading="eager"
				decoding="sync"
			/>

			<article className="flex flex-col items-center gap-4 w-full 2xl:max-w-1/2">
				<h1 className="text-center font-black text-white text-3xl md:text-5xl w-full">
					¡Bienvenido a nuestra comunidad!
				</h1>
				<p className="text-gray-light font-regular sm:text-base md:text-lg text-center w-full">
					Gracias por cada aporte al canal. Creamos esta plataforma para que tu
					ayuda <i>valga aún más</i>, en esta web vas a encontrar coleccionables
					inspirados en la escena competitiva de{" "}
					<strong className="text-primary">League of Legends</strong> y en{" "}
					<strong className="text-primary">Embeejayz</strong>.
				</p>
				<p className="text-gray-light font-regular sm:text-base md:text-lg text-center w-full mt-4">
					¡Los esperamos en las siguientes transmisiones del competitivo!
				</p>
				<EmbeeLink />
				<RedesEmbee />
			</article>
		</section>
	);
}

const RedesEmbee = () => {
	return (
		<ul className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 w-full">
			<li>
				<Link
					to="https://www.instagram.com/embeejayz"
					target="_blank"
					rel="noopener noreferrer"
					className="flex text-white opacity-75 items-center gap-2 hover:opacity-100 duration-200 transition-opacity"
				>
					<Icon name="instagram" color="white" size="20px" />
					Instagram
				</Link>
			</li>
			<li>
				<Link
					to="https://x.com/EmBeeJay_"
					target="_blank"
					rel="noopener noreferrer"
					className="flex text-white opacity-75 items-center gap-2 hover:opacity-100 duration-200 transition-opacity"
				>
					<Icon name="twitter" color="white" size="20px" />
					Twitter
				</Link>
			</li>
			<li>
				<Link
					to="https://links.embeejayz.com"
					target="_blank"
					rel="opener referrer"
					className="flex text-white opacity-75 items-center gap-2 hover:opacity-100 duration-200 transition-opacity"
				>
					<Icon name="morelinks" color="white" size="20px" />
					Más redes
				</Link>
			</li>
		</ul>
	);
};

const EmbeeLink = () => {
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
};
