import React from "react";
import { Nav, LogoBrand, Logo, NavLink, Li, Hamburger, Ul, SignInBtn, NavBtnLink, CloseBtn } from "./NavBarElements";
import { useState } from "react";

function NavBar() {
	const [navOpen, setNavOpen] = useState(false);
	const toggleOpenNav = () => {
		setNavOpen(!navOpen);
	};

	let navBtn;
	let ClassShowMenu;
	if (navOpen) {
		navBtn = <CloseBtn onClick={toggleOpenNav} />;
		ClassShowMenu = "active";
	} else {
		navBtn = <Hamburger onClick={toggleOpenNav} />;
		ClassShowMenu = "";
	}
	return (
		<>
			<Nav>
				<LogoBrand>
					<Logo>M</Logo>
					<NavLink className={"brand-name"} to="/">
						Micheal-D
					</NavLink>
				</LogoBrand>
				{navBtn}
				<Ul className={ClassShowMenu} onClick={toggleOpenNav}>
					<Li>
						<NavLink to="/">Home</NavLink>
					</Li>
					<Li>
						<NavLink to="/projects">Projects</NavLink>
					</Li>
					<Li>
						<NavLink to="/skills">Skills</NavLink>
					</Li>
					<Li>
						<NavLink to="/contact">Contact</NavLink>
					</Li>
				</Ul>
			</Nav>
		</>
	);
}

export default NavBar;
