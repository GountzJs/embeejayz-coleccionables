import { Profile } from "@modules/accounts/presentation/components/profile";
import {
	ProfileProvider,
	useProfileContext,
} from "@modules/accounts/presentation/contexts/profile.context";
import { Link, Navigate, Outlet, useLocation, useParams } from "react-router";

export function UserLayout() {
	const { username = "" } = useParams();

	if (!username) {
		return <Navigate to="/" replace />;
	}

	return (
		<main className="flex gap-12 py-12 w-full min-h-[calc(100vh-75px)] px-mobile md:px-tablet lg:px-desktop">
			<ProfileProvider username={username}>
				<aside className="h-full w-[280px]">
					<Profile />
				</aside>
				<section className="flex flex-col gap-6 flex-1 h-full w-full">
					<Tabs />
					<article className="h-full w-full">
						<Outlet />
					</article>
				</section>
			</ProfileProvider>
		</main>
	);
}

function Tabs() {
	const { username } = useParams();
	const { isLoading, data: profile } = useProfileContext();
	const { pathname: path } = useLocation();

	const isActive = (href: string) => path === href;

	if (isLoading || !profile)
		return (
			<nav className="flex items-end gap-4 w-full border-b border-b-gray-light/20 opacity-50 py-1">
				<span
					className={`font-semibold transition-colors duration-300 underline-red-500 decoration-3 underline-offset-8 ${
						isActive(`/usuarios/${username}`) ? "text-red-500" : "text-white"
					}`}
				>
					Bordes
				</span>
				<span
					className={`font-semibold transition-colors duration-300 underline-red-500 decoration-3 underline-offset-8 ${
						isActive(`/usuarios/${username}/tickets`)
							? "text-red-500"
							: "text-white"
					}`}
				>
					Tickets
				</span>
				<span
					className={`font-semibold transition-colors duration-300 underline-red-500 decoration-3 underline-offset-8 ${
						isActive(`/usuarios/${username}/embeecards`)
							? "text-red-500"
							: "text-white"
					}`}
				>
					Cartas
				</span>
				<span
					className={`font-semibold transition-colors duration-300 underline-red-500 decoration-3 underline-offset-8 ${
						isActive(`/usuarios/${username}/worlds2025`)
							? "text-red-500"
							: "text-white"
					}`}
				>
					Álbum Worlds 2025
				</span>
			</nav>
		);

	return (
		<nav className="flex items-end gap-4 w-full border-b border-b-gray-light/20 py-1">
			<TabLink href={`/usuarios/${username}`}>Bordes</TabLink>
			<TabLink href={`/usuarios/${username}/tickets`}>Tickets</TabLink>
			<TabLink href={`/usuarios/${username}/embeecards`}>Cartas</TabLink>
			<TabLink href={`/usuarios/${username}/worlds2025`}>
				Álbum Worlds 2025
			</TabLink>
		</nav>
	);
}

function TabLink({ href, children }: { href: string; children: string }) {
	const { pathname } = useLocation();
	const isActive = pathname === href;

	return (
		<Link
			to={href}
			className={`font-semibold transition-colors duration-300 hover:text-red-500 underline-red-500 decoration-3 underline-offset-8 ${
				isActive ? "text-red-500" : "text-white hover:underline "
			}`}
		>
			{children}
		</Link>
	);
}
