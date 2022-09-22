import { Route, Routes } from "react-router-dom";
import useLocalState from "./hooks/useLocalState";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useLocalState("theme", defaultDark ? "dark" : "light");

	function switchTheme() {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}

	return (
		<div className="app" data-theme={theme}>
			<nav className="navbar">
				<ul>
					<li>
						<button onClick={switchTheme}>Switch to {theme === "light" ? "Dark" : "Light"} Theme</button>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route index element={<Home />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</div>
	);
}

export default App;
