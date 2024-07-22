import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Viewer } from "../../Classes/Viewer";
import { data } from "../../Data/data";

export const Desktop = () => {
	let viewer;

	useEffect(() => {
		viewer = new Viewer("svg"); //initialize the viewer class
		viewer.render(data);
	}, []);

	return (
		<svg
			id="svg"
			width={"100vw"}
			height={"100vh"}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				backgroundColor: "transparent",
			}}
		></svg>
	);
};
