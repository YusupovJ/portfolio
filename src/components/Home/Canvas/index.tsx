import React, { memo, useEffect } from "react";
import { Wrapper } from "./style";

interface Props {}

class Draw {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D | null;

	constructor() {
		let canvas = document.getElementById("canvas") as HTMLCanvasElement;
		let context = canvas.getContext("2d");

		this.context = context;
		this.canvas = canvas;
	}

	public createUserEvents() {
		let canvas = this.canvas;

		canvas.addEventListener("mousemove", this.onMouseMove);
	}

	onMouseMove = (event: MouseEvent) => {
		const { screenX, screenY } = event;
	};
}

const Canvas: React.FC<Props> = (props) => {
	useEffect(() => {
		const draw = new Draw();
		// draw.createUserEvents();
	}, []);

	return <Wrapper id="canvas">Your browser don't supports canvas</Wrapper>;
};

export default memo(Canvas);
