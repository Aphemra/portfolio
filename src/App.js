import useLocalState from "./hooks/useLocalState";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

import { webSkills, gameSkills, sharedSkills } from "./data/skillsData";
import { projects } from "./data/projectsData";
import Footer from "./components/Footer";

function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resumePDFLink = "https://drive.google.com/file/d/1QH1qQgky8t7yn5-VsctpREJfN1kMOmgd/view?usp=sharing";
	const [theme, setTheme] = useLocalState("theme", defaultDark ? "dark" : "light");

	const shuffledSkillsList = () => {
		const allSkillsList = [...webSkills, ...gameSkills, ...sharedSkills];
		return allSkillsList
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
	};

	function switchTheme() {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}

	return (
		<div className="app" data-theme={theme}>
			<NavBar theme={theme} switchTheme={switchTheme} resumePDFLink={resumePDFLink} />
			<div className="page-body">
				<Home resumePDFLink={resumePDFLink} />
				<About allSkillsList={shuffledSkillsList()} />
				<Portfolio projectsList={projects} />
				<Contact resumePDFLink={resumePDFLink} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
