import React from "react";
import simi2 from "../assets/simi2.jpg";

function Projects() {
	return (
		<>
			<section class="project-hero">
				<div class="project-hero-text">
					<h1>Personal Projects</h1>
				</div>
			</section>
			<main class="main">
				<section className=" card dog-site">
					<p> lorem sidfo sfoso odfdjdfhdjddfk df </p>
					<img src={simi2} alt="Dog Image Gallery" />
				</section>

				<section className=" card g-tone" alt="g-tone site">
					<p>dfdfsdsdd fdddddddddddddddddddddddddddddddddd</p>
					<img src={simi2} height={"300"} width={"300"} alt="Tom's fis" />
				</section>

				<section className=" card dog-site">
					<p>sdffffffffffffffffffffffffff</p>
					<img src={simi2} alt="" />
				</section>

				<section className=" card dog-site">
					<p>sdfdsdfssdd</p>
					<img src={simi2} alt="" />
				</section>

				<section className=" card dog-site">
					<p>rfgfdfggggggggggggggggggg</p>
					<img src={simi2} alt="" />
				</section>
			</main>
		</>
	);
}

export default Projects;
