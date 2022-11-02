import React, { memo, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { skills } from "src/helpers/utils/skills";

const TagsCanvas: React.FC = () => {
	const width = window.innerWidth > 982 ? window.innerWidth / 2 : window.innerWidth;
	const height = window.innerHeight > 982 ? window.innerHeight / 2 : window.innerHeight / 1.1;

	const settings = JSON.stringify({
		textColour: "#08fdd8",
		outlineIncrease: 10,
		textHeight: 20,
		minBrightness: 0.2,
		depth: 0.7,
		initial: [0.2, -0.2],
		pulsateTo: 0.6,
		hideTags: false,
		shadow: false,
		shadowBlur: 3,
		imageScale: null,
		fadeIn: 1000,
		clickToFront: 600,
		outlineColour: "rgba(0,0,0,0)",
		wheelZoom: false,
	});

	useEffect(() => {
		eval(`try {
			TagCanvas.Start(
			  'myCanvas',
			  '',
			  ${settings}
			);
		  }
		  catch(e) {
			document.getElementById('myCanvasContainer').style.display = 'none';
		  }`);
	}, [settings]);

	return (
		<Fade>
			<div id="myCanvasContainer">
				<canvas id="myCanvas" width={width} height={height}>
					<p>Anything in here will be replaced on browsers that support the canvas element</p>
					<ul>
						{skills.map((skill) => {
							return (
								<li key={skill.id}>
									<a href={skill.link} target="_blank" rel="noreferrer">
										{skill.title}
									</a>
								</li>
							);
						})}
					</ul>
				</canvas>
			</div>
		</Fade>
	);
};

export default memo(TagsCanvas);
