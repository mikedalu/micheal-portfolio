import React from "react";
import dogImg from "../assets/dogApp.jpg";
import gtoneImg from "../assets/gtone.jpg";
import tomShopImg from "../assets/tomshop.jpg";
import todoImg from "../assets/todo.jpg";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

function Projects() {
	const Button = styled.button`
		background-color: #537a5a;
		color: #ccc;
		padding: 5px;
		font-size: 18px;
		cursor: pointer;
	`;
	const Style = styled.div`
		.card {
			width: 100%;
			padding-left: 2rem;
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			flex-wrap: nowrap;
			border: 2px solid #ccc;
			margin-top: 20px;
			box-shadow: 0px 0px 20px #374151;
		}
		.content {
			width: 50%;
			color: #374151;
			border-right: 4px solid #537a5a;
			margin-right: 5px;
			padding: 2rem;
			line-height: 1.5;
			h3 {
				text-align: center;
				font-weight: bold;
				font-size: 28px;
				margin: 10px;
				color: 374151;
			}
			.content-container {
				font-size: 18px;
			}
		}
		.card img {
			width: 50%;
			height: auto;
		}
		@media (max-width: 1000px) {
			.card {
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.content {
					width: 100%;
				}
				.card img {
					max-width: 100%;
					height: auto;
				}
			}
		}
	`;
	return (
		<>
			<section className="project-hero">
				<div className="project-hero-text">
					<h1>Personal Projects</h1>
				</div>
			</section>
			<Style>
				<main className="main">
					<section className=" card dog-site">
						<div className="content">
							<h3>Dog Search App</h3>
							<div className="content-container">
								The Dog search website A website built to dynamically search pictures of dogs classified by breed. It is build
								using React.js and API integration
								<ul>
									<li>React</li>
									<li>CSS</li>
									<li>
										<a href="https://eager-lovelace-0047d9.netlify.app/">
											<Button>Visit site</Button>
										</a>
									</li>
								</ul>
								<a href="https://github.com/mikedalu/DogSearchApp-2">
									<AiOutlineGithub />
								</a>
							</div>
						</div>
						<img src={dogImg} alt="Dog Gallery" />
					</section>
					<section className=" card dog-site">
						<div className="content">
							<h3>E commerce -Gtone multiB</h3>
							<div className="content-container">
								The E-commerce website that is designed to sell fashion accessories ranging from watches, earings, necklaces
								to rings. The following tech-stack was used to accomplish this project
								<ul>
									<li>React</li>
									<li>CSS/SASS</li>
									<li>Styled-components</li>
									<li>Bootsrap</li>
									<li>
										<a href="https://wonderful-wozniak-dbc68a.netlify.app/">
											<Button>Visit site</Button>
										</a>
									</li>
								</ul>
								<a href="https://github.com/mikedalu/g-tone">
									<AiOutlineGithub />
								</a>
							</div>
						</div>
						<img src={gtoneImg} alt="gtone Website" />
					</section>
					<section className=" card dog-site">
						<div className="content">
							<h3>Online Fish-shop</h3>
							<div className="content-container">
								Tom's fish shop is desinged to allow fish dish lovers to be able to order their favourite fish dish at the
								comfort of their homes. The follwing was used to build the project.
								<ul>
									<li>HTML</li>
									<li>CSS</li>
									<li>JavaScript</li>
									<li>Bootsrap</li>
									<li>
										<a href="https://festive-fermat-845eb0.netlify.app/">
											<Button>Visit site</Button>
										</a>
									</li>
								</ul>
								<a href="https://github.com/mikedalu/Tom-s-FishShop">
									<AiOutlineGithub />
								</a>
							</div>
						</div>
						<img src={tomShopImg} alt="Tom's fish shop website" />
					</section>
					<section className=" card dog-site">
						<div className="content">
							<h3>To Do App</h3>
							<div className="content-container">
								It was build using simple HTML CSS and JavaScript, to demonstrate simple DOM manipulation using JavaScript
								<ul>
									<li>HTML</li>
									<li>CSS</li>
									<li>JavaScript</li>
									<li>Bootsrap</li>
									<li>
										<a href="https://mikedalu.github.io/toDoProject/">
											<Button>Visit site</Button>
										</a>
									</li>
								</ul>
								<a href="https://github.com/mikedalu/toDoProject">
									<AiOutlineGithub />
								</a>
							</div>
						</div>
						<img src={todoImg} alt="Todo app " />
					</section>
				</main>
			</Style>
		</>
	);
}

export default Projects;
