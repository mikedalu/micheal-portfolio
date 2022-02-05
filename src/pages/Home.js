import React, { useEffect } from "react";
// import styled from "styled-components";
import CV from "../assets/document/CVMicheal.pdf";
import Aos from "aos";
import "aos/dist/aos.css"; //animation library

function Home() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<>
			<section className="hero">
				<div className="hero-text">
					<h1>
						Hey <br />I am Micheal
					</h1>
					<p data-aos="fade-in">
						I'm a Creative <span>Web </span> Developer
					</p>
				</div>

				<div data-aos="fade-in" className="html-img-1">
					<img src="./images/hero2.png" alt="HTML tag code" />
				</div>
			</section>
			<main data-aos="fade-in" className="main">
				<div className="main-text">
					<p>
						I am a frontend web developer with experience in building responsive websites. Proficient in HTML, CSS, Bootsrap,
						Javascript and React JS. I have an eye for aesthetics and I love solving problems and improving on things.
					</p>
					<p>
						These personal attributes help me deliver top quality products with an appealing user interface and a most satisfying
						user experience. I am passionate about UI designs and possess working knowledge of Adobephotoshop and Figma
					</p>
				</div>

				<div data-aos="flip-right" className="html-img-2">
					<img src="./images/hero2.png" alt="HTML tag code" />
				</div>
			</main>
			<button data-aos="fade-up" className="btn" style={{ marginBottom: "2.2.4rem" }}>
				<a href={CV}>Download my CV</a>
			</button>
		</>
	);
}

export default Home;
