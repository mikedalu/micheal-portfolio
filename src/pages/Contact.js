import React from "react";

function Contact() {
	return (
		<>
			<section class="project-hero">
				<div class="project-hero-text">
					<h1>Let's Get In Touch</h1>
				</div>
			</section>
			<main class="contact-main">
				<form action="https://formspree.io/f/xgedvqno" method="POST" id="my-form">
					<div class="form-group">
						<label for="firstName">Name</label>
						<input type="text" id="firstName" name="firstName" />
					</div>
					<div class="form-group">
						<label for="message">Project Description</label>
						<textarea name="message" id="message" cols="30" rows="10"></textarea>
					</div>
					<button type="submit">Submit</button>
				</form>
				<div id="status" class="success">
					Success
				</div>
			</main>
		</>
	);
}

export default Contact;
