import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const Nav = styled.nav`
	background: #18181b;
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((100vw - 1000px) / 2);
	z-index: 10;
`;
export const LogoBrand = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 10px;
	font-size: 28px;
`;
export const Logo = styled.span`
	align-self: center;
	border-radius: 40px;
	background-color: #fff;
	padding: 4px;
	transition: 0.4s ease;
	&:hover {
		background-color: #c7f38d;
	}
`;

export const Ul = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	z-index: 99999;
	/* width: 100vw; */
	/* flex-wrap: nowrap; */

	@media screen and (max-width: 760px) {
		display: block;
		height: 100vh;
		width: 50%;
		padding-left: 50px;

		position: absolute;
		top: 80px;
		left: -100%;
		background-color: black;
		transition: 0.5s ease;

		&.active {
			top: 80px;
			left: 0;
		}
	}
`;
export const Li = styled.li`
	list-style: none;
	font-size: 20px;
	color: #fff;
	padding: 10px;

	@media screen and (max-width: 760px) {
		margin-bottom: 24px;
		font-size: 20px;
	}
`;
export const NavLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	&:hover {
		color: #c7f38d;
		border-radius: 4px;
		transition: all 0.2s ease-in-out;
	}
	padding: 0 1rem;
	cursor: pointer;
	&.active {
		color: #c7f38d;
	}
	&.brand-name {
		font-size: 28px;
		color: #fff;
	}
`;

export const Hamburger = styled(FaBars)`
	display: none;
	color: #fff;

	@media screen and (max-width: 760px) {
		display: block;
		positioin: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 3.5rem;
		cursor: pointer;
	}
`;

export const CloseBtn = styled(AiOutlineClose)`
	display: none;
	color: #fff;

	@media screen and (max-width: 760px) {
		display: block;
		positioin: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 3.5rem;
		cursor: pointer;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #256ce1;
	padding: 10px 22px;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`;
export const SignInBtn = styled.div`
	align-self: center;

	@media screen and (max-width: 760px) {
		display: none;
	}
`;
