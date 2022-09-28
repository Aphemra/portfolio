import uuid from "react-uuid";
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
	// Extract these out into three lists and then
	// combine them back into the allSkillsList using spread
	// operator. Then take this list and shuffle it using
	// custom function.
	// const allSkillsList = [
	// 	// WEB SKILLS
	// 	{
	// 		id: uuid(),
	// 		category: "web",
	// 		name: "JavaScript",
	// 		confidence: 0.5,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		category: "web",
	// 		name: "HTML",
	// 		confidence: 0.75,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		category: "web",
	// 		name: "CSS",
	// 		confidence: 0.25,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		category: "web",
	// 		name: "React",
	// 		confidence: 1,
	// 	},
	// 	// GAME SKILLS
	// 	{
	// 		id: uuid(),
	// 		category: "game",
	// 		name: "C#",
	// 		confidence: 0.5,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		category: "game",
	// 		name: "Java",
	// 		confidence: 0.75,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		category: "game",
	// 		name: "Unity",
	// 		confidence: 0.25,
	// 	},
	// 	// SHARED SKILLS
	// 	{
	// 		id: uuid(),
	// 		category: "shared",
	// 		name: "Git",
	// 		confidence: 0.5,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		category: "shared",
	// 		name: "Github",
	// 		confidence: 0.75,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		category: "shared",
	// 		name: "Design Patterns",
	// 		confidence: 0.25,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		category: "shared",
	// 		name: "Responsive Design",
	// 		confidence: 1,
	// 	},
	// ];
	const allSkillsList = [
		{
			id: uuid(),
			category: "web",
			name: "JavaScript",
			confidence: 0.65,
		},
		{
			id: uuid(),
			category: "web",
			name: "Responsive Design",
			confidence: 0.7,
		},
		{
			id: uuid(),
			category: "shared",
			name: "Github",
			confidence: 0.9,
		},
		{
			id: uuid(),
			category: "web",
			name: "CSS",
			confidence: 0.65,
		},
		{
			id: uuid(),
			category: "game",
			name: "C#",
			confidence: 0.85,
		},
		{
			id: uuid(),
			category: "shared",
			name: "Design Patterns",
			confidence: 0.4,
		},
		{
			id: uuid(),
			category: "web",
			name: "Express",
			confidence: 0.2,
		},
		{
			id: uuid(),
			category: "game",
			name: "Java",
			confidence: 0.5,
		},
		{
			id: uuid(),
			category: "web",
			name: "React",
			confidence: 0.65,
		},
		{
			id: uuid(),
			category: "game",
			name: "Unity",
			confidence: 0.75,
		},
		{
			id: uuid(),
			category: "web",
			name: "HTML",
			confidence: 0.85,
		},
		{
			id: uuid(),
			category: "shared",
			name: "Git",
			confidence: 0.7,
		},
		{
			id: uuid(),
			category: "web",
			name: "Accessibility",
			confidence: 0.35,
		},
		{
			id: uuid(),
			category: "web",
			name: "Node",
			confidence: 0.4,
		},
	];
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
				<About allSkillsList={allSkillsList} />
				<Portfolio projectsList={projectsList} />
				<Contact />
			</div>
		</div>
	);
}

export default App;
