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
				<p className="main-text">
					My name is Michael Dalu and I’m a frontend web developer. I’ve made my entrance onto the scene fairly recently and have so
					far picked up skills in a number of frontend development technologies. I have an eye for aesthetics and I love paying
					attention to details . These personal attributes help me deliver top quality products with an appealing user interface and a
					most satisfying user experience.
				</p>
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
