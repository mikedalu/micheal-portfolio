import React from "react";

function Contact() {
	return (
		<>
			<section className="project-hero">
				<div className="project-hero-text">
					<h1>Let's Get In Touch</h1>
				</div>
			</section>
			<main className="contact-main">
				<form action="https://formspree.io/f/xgedvqno" method="POST" id="my-form">
					<div className="form-group">
						<label htmlFor="firstName">Name</label>
						<input type="text" id="firstName" name="firstName" />
					</div>
					<div className="form-group">
						<label htmlFor="message">Project Description</label>
						<textarea className="message" id="message" cols="30" rows="10"></textarea>
					</div>
					<button type="submit">Submit</button>
				</form>
				<div id="status" className="success">
					Success
				</div>
			</main>
		</>
	);
}

export default Contact;
