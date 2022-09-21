import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Test1 from "../src/pages/Test1";
import BoxCard from "./components/BoxCard/BoxCard";
import "./App.css";

const App: React.FC = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/test-1" element={<Test1 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
