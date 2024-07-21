import { useEffect } from "react";
import * as d3 from "d3";

export const Desktop = () => {
	useEffect(() => {
		const svg = d3
			.select("#svg")
			.append("svg")
			.attr("width", "100vw")
			.attr("height", "100vh");
	}, []);

	return (
		<div
			id="svg"
			width={"100vw"}
			height={"100vh"}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				backgroundColor: "transparent",
			}}
		></div>
	);
};
