import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div id="bg"></div>
			<div id="page-container">
				<div id="content-wrap">
					<Router>
						<NavBar />
						<Routes>
							<Route path="/" exact element={<Home />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/skills" element={<Skills />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
						<Footer />
					</Router>
				</div>
			</div>
		</>
	);
}

export default App;
