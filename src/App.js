import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

function App() {
	return (
		<BrowserRouter basename={"/portfolio/"}>
			<Routes>
				<Route index element={<Home />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
