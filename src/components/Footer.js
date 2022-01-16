import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
	return (
		<footer className="footer">
			<div className="social-icons">
				<a href="https://github.com/mikedalu" target="_blank">
					<AiOutlineGithub />
				</a>
				<a href="https://www.linkedin.com/in/mike-simdi-6b0847156" target={"_blank"}>
					<AiOutlineLinkedin />
				</a>

				<a href="https://web.facebook.com/michael.dalu" target={"_blank"}>
					<FaFacebookSquare />
				</a>
			</div>
			<p>Micheal Dalu &copy; 2022</p>
		</footer>
	);
}

export default Footer;
