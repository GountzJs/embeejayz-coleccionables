// biome-ignore assist/source/organizeImports: Order for Auto Save
import { cdnUrl } from "@/app/core/settings";
import { Collaborator } from "@modules/common/presentation/components/collaborator";
import type React from "react";
import { Link } from "react-router";

const collaborators = [
	{
		name: "Gountz",
		avatar: `${cdnUrl}/images/avatars/gountz.avif`,
		href: "https://github.com/GountzJs",
	},
	{
		name: "Su1zide",
		avatar: `${cdnUrl}/images/avatars/su1zide.avif`,
		href: "https://www.instagram.com/su1zide",
	},
	{
		name: "Mari yusi",
		avatar: `https://static-cdn.jtvnw.net/jtv_user_pictures/a4c4a605-4488-4f07-8b50-57d514879cba-profile_image-70x70.jpeg`,
		href: "https://www.instagram.com/mari7_yg13",
	},
];

export function Footer() {
	return (
		<footer className="bg-gray-dark flex flex-col items-center justify-center py-6 px-mobile md:px-tablet lg:px-desktop w-full">
			<p className="font-medium text-lg text-center text-pretty w-full">
				Inspirado en{" "}
				<LinkMention to="https://manz.dev/manzcards">
					<span>ManzDev</span>
				</LinkMention>{" "}
				y{" "}
				<LinkMention to="https://cards.uxanarangel.com">
					<span>AnaRangel</span>
				</LinkMention>
				.
			</p>
			<p className="font-medium text-lg text-center text-pretty w-full">
				Mención honorífica a{" "}
				<LinkMention to="https://uxcorprangel.github.io">
					<span>UX Corp Rangel</span>
				</LinkMention>{" "}
				por su increíble trabajo e inspiración dentro de la comunidad.
			</p>
			<p className="font-medium text-lg text-center text-pretty w-full">
				¡Síguenos en las redes y estén atentos a futuros proyectos! ¡Muchas
				gracias!
			</p>

			<div className="flex flex-col items-center justify-center gap-6 my-4">
				<Collaborator
					href="https://links.embeejayz.com"
					name="Embeejayz"
					avatar={`${cdnUrl}/images/avatars/embeejayz.avif`}
					target="_blank"
					rel="opener referrer"
				>
					<span>Embeejayz</span>
				</Collaborator>
				<div className="flex flex-col items-center justify-center gap-2 text-white font-semibold w-full">
					<p>El Enjambre:</p>
					<ul className="flex items-center gap-3">
						{collaborators.map((collaborator) => (
							<li
								key={collaborator.name}
								className="flex items-center justify-center h-fit w-fit"
							>
								<Collaborator
									href={collaborator.href}
									name={collaborator.name}
									avatar={collaborator.avatar}
									target="_blank"
									size="small"
									rel="noopener noreferrer"
								/>
							</li>
						))}
					</ul>
				</div>
			</div>

			<p className="text-xs font-regular text-pretty text-center mt-4 max-w-3/4 xl:max-w-1/2 w-full">
				Embee Recompensas no cuenta con el respaldo de Riot games y no refleja
				las opiniones ni los puntos de vista de Riot games ni de ninguna persona
				involucrada oficialmente en la producción o administración de
				propiedades de Riot games. Riot games y todas las propiedades asociadas
				son marcas comerciales o marcas comerciales registradas de Riot games,
				Inc.
			</p>
		</footer>
	);
}

interface LinkProps {
	to: string;
	children: React.ReactNode;
}

const LinkMention = ({ to, children }: LinkProps) => {
	return (
		<Link
			to={to}
			className="text-primary font-semibold hover:underline hover:decoration-3 duration-200 transition-all"
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</Link>
	);
};
