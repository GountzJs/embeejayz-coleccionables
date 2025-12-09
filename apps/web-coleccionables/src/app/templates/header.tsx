import { Link } from "react-router";

export function Header() {
	return (
		<header className="flex items-center justify-between py-6 px-mobile md:px-tablet lg:px-desktop w-full">
			<nav className="flex gap-6">
				<Link to="/">
					<span>Inicio</span>
				</Link>
				<Link to="/clasificatoria">
					<span>Clasificación</span>
				</Link>
				{/* <DropdownBox>
					<ButtonRewards />
					<DropdownItems>
						<DropdownItem onClick={goToBorders}>Borders</DropdownItem>
						<DropdownItem onClick={goToCartas}>Cartas</DropdownItem>
					</DropdownItems>
				</DropdownBox> */}
			</nav>

			{/* <SearchAccount /> */}
		</header>
	);
}
