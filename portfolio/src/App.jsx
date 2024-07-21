import { useState } from "react";
import "./App.css";
import { Desktop } from "./Component/Desktop/Desktop";
import { Navigation } from "./Component/Navigation/Navigation";

function App() {
	return (
		<>
			<div className="background"></div>
			<Desktop />
			<Navigation />
		</>
	);
}

export default App;
