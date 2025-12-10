import { SearchAccount } from "@modules/common/presentation/components/search-account";
import { Link } from "react-router";
import { Icon } from "ui-kit";

export function Header() {
	return (
		<header className="flex items-center justify-between py-6 px-mobile md:px-tablet lg:px-desktop w-full">
			<nav className="hidden md:flex gap-6">
				<NavLink to="/" label="Inicio" />
				<NavLink to="/clasificatoria" label="Clasificación" />
			</nav>
			<div className="hidden md:block">
				<SearchAccount />
			</div>
			<div className="absolute top-4 left-4 md:hidden">
				<Icon name="menuAlignLeft" color="#fff" size="24px" />
			</div>
		</header>
	);
}

interface Props {
	to: string;
	label: string;
}

const NavLink = ({ to, label }: Props) => {
	return (
		<Link
			to={to}
			className="text-white opacity-80 hover:opacity-100 transition-opacity duration-150 font-semibold text-xl"
		>
			{label}
		</Link>
	);
};
