import useLocalState from "./hooks/useLocalState";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resumePDFLink = "https://drive.google.com/file/d/1AnbkQUZR-gCo5-qJsqJzUFEgjGvexkA9/view?usp=sharing";
	const [theme, setTheme] = useLocalState("theme", defaultDark ? "dark" : "light");

	function switchTheme() {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}

	return (
		<div className="app" data-theme={theme}>
			<NavBar theme={theme} switchTheme={switchTheme} resumePDFLink={resumePDFLink} />
			<div className="page-body">
				<Home resumePDFLink={resumePDFLink} />
				<About />
				<Portfolio />
				<Contact />
			</div>
		</div>
	);
}

export default App;
