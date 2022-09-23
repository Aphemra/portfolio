import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

function NavBar({ theme, switchTheme }) {
	const resumePDFLink = "https://drive.google.com/file/d/1AnbkQUZR-gCo5-qJsqJzUFEgjGvexkA9/view?usp=sharing";

	return (
		<nav className="navbar">
			<ul className="navbar-links">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
				<li>
					<button className="resume-download">
						<a target="_blank" href={resumePDFLink} rel="noreferrer">
							Resume
						</a>
					</button>
				</li>
				<li>
					<button className="theme-button" onClick={switchTheme}>
						<FontAwesomeIcon className="theme-icon" icon={theme === "light" ? faMoon : faSun} />
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
