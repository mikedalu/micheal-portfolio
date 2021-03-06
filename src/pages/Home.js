import React, { useEffect } from "react";
// import styled from "styled-components";
import CV from "../assets/document/CVMicheal.pdf";
import Parag from "./text.json";

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
					<p>{Parag.firstP}</p>
					<p>{Parag.secondP}</p>
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
