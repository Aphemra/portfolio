import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MenuButton from "./MenuButton";
import lightModeAvatar from "../images/lmAvatar.png";
import darkModeAvatar from "../images/dmAvatar.png";

function NavBar({ theme, switchTheme }) {
	const resumePDFLink = "https://drive.google.com/file/d/1AnbkQUZR-gCo5-qJsqJzUFEgjGvexkA9/view?usp=sharing";

	function toggleMenu() {
		const sideNavElementClasses = document.getElementsByClassName("side-navbar")[0].className;
		document.getElementsByClassName("side-navbar")[0].className =
			sideNavElementClasses === "side-navbar hide" ? "side-navbar" : "side-navbar hide";
		document.getElementsByClassName("modal-lock")[0].className =
			sideNavElementClasses === "side-navbar hide" ? "modal-lock" : "modal-lock hide";
	}

	return (
		<>
			<MenuButton openMenu={toggleMenu} />
			<div onClick={toggleMenu} className="modal-lock hide"></div>
			<div className="static-icons-left">
				<div className="icon">
					<a title="Visit my GitHub page!" target="_blank" rel="noreferrer" href="https://github.com/Aphemra">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>
				<div className="icon">
					<a
						title="Visit my LinkedIn page!"
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/nickibler/"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</div>
				<div className="icon">
					<a title="Visit my Twitter page!" target="_blank" rel="noreferrer" href="http://www.twitter.com/aphemra">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
				<div className="divider"></div>
			</div>
			<div className="static-icons-right">
				<div className="email">
					<a title="Email me!" target="_blank" rel="noreferrer" href="mailto:aphemra@gmail.com">
						aphemra@gmail.com
					</a>
				</div>
				<div className="divider"></div>
			</div>
			<nav className="side-navbar hide">
				<ul className="side-navbar-links-top">
					<li>
						<button type="button" title="Download my resume!" className="resume-download">
							<a target="_blank" rel="noreferrer" href={resumePDFLink}>
								Resume
							</a>
						</button>
					</li>
					<li>
						<button title="Switch themes!" className="theme-button" onClick={switchTheme}>
							{theme === "light" ? (
								<DarkModeIcon className="theme-icon" />
							) : (
								<LightModeIcon className="theme-icon" />
							)}
						</button>
					</li>
				</ul>
				<div className="side-nav-divider"></div>
				<div className="side-avatar-container">
					<img
						className="side-site-avatar"
						src={theme === "light" ? lightModeAvatar : darkModeAvatar}
						alt="My custom avatar."
					/>
					<div className="side-nav-name">
						<span className="side-nav-first-name">Nic</span>
						<span className="side-nav-last-name">Kibler</span>
					</div>
				</div>
				<div className="side-nav-divider"></div>
				<ul className="side-navbar-links">
					<li>
						<a onClick={toggleMenu} href="#home">
							Home
						</a>
					</li>
					<li>
						<a onClick={toggleMenu} href="#about">
							About
						</a>
					</li>
					<li>
						<a onClick={toggleMenu} href="#portfolio">
							Portfolio
						</a>
					</li>
					<li>
						<a onClick={toggleMenu} href="#contact">
							Contact
						</a>
					</li>
				</ul>
				<div className="side-nav-divider"></div>
			</nav>
			<nav className="navbar">
				<div className="avatar-container">
					<img
						className="site-avatar"
						src={theme === "light" ? lightModeAvatar : darkModeAvatar}
						alt="My custom avatar."
					/>
					<span className="nav-first-name"></span>
					<span className="nav-last-name">Kibler</span>
				</div>
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
					<li className="do-not-bounce">
						<button title="Download my resume!" className="resume-download">
							<a type="button" target="_blank" href={resumePDFLink} rel="noreferrer">
								Resume
							</a>
						</button>
					</li>
					<li className="do-not-bounce">
						<button title="Switch themes!" className="theme-button" onClick={switchTheme}>
							{theme === "light" ? (
								<DarkModeIcon className="theme-icon" />
							) : (
								<LightModeIcon className="theme-icon" />
							)}
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavBar;
