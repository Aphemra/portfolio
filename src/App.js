import useLocalState from "./hooks/useLocalState";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

//Temp
import lightModeAvatar from "./images/lmAvatar.png";

function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resumePDFLink = "https://drive.google.com/file/d/1AnbkQUZR-gCo5-qJsqJzUFEgjGvexkA9/view?usp=sharing";
	const [theme, setTheme] = useLocalState("theme", defaultDark ? "dark" : "light");

	// Editable Resume Fields
	const webSkillsList = ["JavaScript", "HTML", "CSS", "React"];
	const gameSkillsList = ["C#", "Java", "Unity", "Design Patterns"];
	const sharedSkillsList = ["Git", "Github", "Responsive Design"];
	const projectsList = [
		{
			title: "Project 1",
			description: "A Project's Description",
			imageSource: lightModeAvatar,
			skillsUsed: ["Javascript", "HTML", "CSS", "React"],
		},
		{
			title: "Project 2",
			description: "A Project's Description",
			imageSource: lightModeAvatar,
			skillsUsed: ["Javascript", "HTML", "CSS", "React"],
		},
		{
			title: "Project 3",
			description: "A Project's Description",
			imageSource: lightModeAvatar,
			skillsUsed: ["Javascript", "HTML", "CSS", "React"],
		},
		{
			title: "Project 4",
			description: "A Project's Description",
			imageSource: lightModeAvatar,
			skillsUsed: ["Javascript", "HTML", "CSS", "React"],
		},
	];

	function switchTheme() {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}

	return (
		<div className="app" data-theme={theme}>
			<NavBar theme={theme} switchTheme={switchTheme} resumePDFLink={resumePDFLink} />
			<div className="page-body">
				<Home resumePDFLink={resumePDFLink} />
				<About webSkillsList={webSkillsList} gameSkillsList={gameSkillsList} sharedSkillsList={sharedSkillsList} />
				<Portfolio projectsList={projectsList} />
				<Contact />
			</div>
		</div>
	);
}

export default App;
