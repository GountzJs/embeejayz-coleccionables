import { ProfileProvider } from "@modules/accounts/presentation/contexts/profile.context";
import { Navigate, Outlet, useParams } from "react-router";

export function UserLayout() {
	const { username = "" } = useParams();

	if (!username) {
		return <Navigate to="/" replace />;
	}

	return (
		<main className="flex gap-12 py-12 w-full min-h-[calc(100vh-75px)] px-mobile md:px-tablet lg:px-desktop">
			<ProfileProvider username={username}>
				<aside className="h-full w-[280px]">
					<p>My perfil</p>
				</aside>
				<section className="flex flex-col gap-6 flex-1 h-full w-full">
					<nav>tabs</nav>
					<article className="h-full w-full">
						<Outlet />
					</article>
				</section>
			</ProfileProvider>
		</main>
	);
}
