import React, {memo, useEffect} from "react";
import styled from "styled-components";

/* Компонент с точками */

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	overflow: hidden;
	left: 0;
	z-index: -1;
	width: 100%;
`;

interface IProperties {
	color: string;
	w: number;
	h: number;
	maxRad: number;
	minRad: number;
	massFactor: number;
	smooth: number;
	sphereRad: number;
	bigRad: number;
	mouseSize: number;
	maxParticlesCount: number;
}

interface ICoords {
	x: number;
	y: number;
}

interface IMouse extends ICoords {
	down: boolean;
}

const ParticlesV2: React.FC = () => {
	let whichColor = Math.random() > 0.5 ? true : false;
	const getColor = (a: number = 1): string => {
		const r = whichColor ? "8" : "253";
		const g = whichColor ? `253` : "33";
		const b = whichColor ? `216` : "85";

		return `rgba(${r}, ${g}, ${b}, ${a})`;
	};

	const getRad = (min: number, max: number) => {
		return Math.random() * (max - min) + min;
	};

	useEffect(() => {
		const canvas: HTMLCanvasElement = document.getElementById("particles") as HTMLCanvasElement;
		const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

		// Настройки
		const properties: IProperties = {
			minRad: 6,
			maxRad: 20,
			sphereRad: 300,
			massFactor: 0.002,
			smooth: 0.65,
			color: getColor(),
			w: innerWidth,
			h: 720,
			bigRad: 35,
			mouseSize: 120,
			maxParticlesCount: 300,
		};

		let particles: Particle[] = [];

		let mouse: IMouse = {
			x: properties.w / 2,
			y: properties.h / 2,
			down: false,
		};

		/* ------------------------------------ */

		// Размеры холста
		const setScale = () => {
			canvas.width = document.documentElement.clientWidth;
			properties.w = document.documentElement.clientWidth;
		};

		window.addEventListener("resize", setScale);
		canvas.height = properties.h;
		setScale();

		/* ------------------------------------ */

		const drawCircle = (x: number, y: number, rad: number, isStroke: boolean, color: string) => {
			ctx.fillStyle = color;
			ctx.strokeStyle = color;

			ctx.beginPath();
			ctx.arc(x, y, rad, 0, Math.PI * 2);
			ctx.closePath();

			isStroke ? ctx.stroke() : ctx.fill();
		};

		const updateCircle = () => {
			for (let i = 1; i < particles.length; i++) {
				let acc: ICoords = {x: 0, y: 0};

				for (let j = 0; j < particles.length; j++) {
					if (i == j) continue;
					let [a, b] = [particles[i], particles[j]];

					let delta = {x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y};
					let dist = Math.sqrt(delta.x * delta.x + delta.y * delta.y) || 1;
					let force = ((dist - properties.sphereRad) / dist) * b.mass;

					if (j === 0) {
						let alpha = properties.mouseSize / 2 / dist;
						a.color = getColor(alpha);
						dist < 120 ? (force = (dist - 120) * b.mass) : (force = a.mass);
					}

					acc.x += delta.x * force;
					acc.y += delta.y * force;
				}

				particles[i].vel.x = particles[i].vel.x * properties.smooth + acc.x * particles[i].mass;
				particles[i].vel.y = particles[i].vel.y * properties.smooth + acc.y * particles[i].mass;
			}

			particles.map((particle) =>
				particle === particles[0] ? particle.draw(mouse.x, mouse.y) : particle.draw()
			);
		};

		class Particle {
			public pos: ICoords;
			public vel: ICoords;
			public rad: number;
			public color: string;
			public mass: number;

			constructor(bigParticleRad?: number) {
				this.pos = {x: mouse.x, y: mouse.y};
				this.vel = {x: 0, y: 0};
				this.rad = bigParticleRad || getRad(properties.minRad, properties.maxRad);
				this.color = getColor();
				this.mass = this.rad * properties.massFactor;
			}

			draw(x?: number, y?: number) {
				this.pos.x = x || this.pos.x + this.vel.x;
				this.pos.y = y || this.pos.y + this.vel.y;

				drawCircle(this.pos.x, this.pos.y, this.rad, false, this.color);
				drawCircle(this.pos.x, this.pos.y, this.rad, true, properties.color);
			}
		}

		/* ------------------------------------ */

		// Бесконечная перерисовка
		const loop = () => {
			if (mouse.down) {
				particles.push(new Particle());
			}

			if (mouse.down && particles.length > properties.maxParticlesCount) {
				particles.splice(1, 1);
			}

			updateCircle();

			particles.map((particle) => particle.draw());
			requestAnimationFrame(() => {
				ctx.clearRect(0, 0, innerWidth, properties.h);
				loop();
			});
		};

		const init = () => {
			loop();

			particles.push(new Particle(properties.bigRad));
		};

		init();

		/* ------------------------------------ */

		const setMousePos = (event: any) => {
			if (event.pageY <= properties.h) {
				[mouse.y, mouse.x] = [event.pageY, event.pageX];
			}
		};

		const setPos = (event: TouchEvent) => {
			if (event.touches[0].pageY < properties.h) {
				[mouse.y, mouse.x] = [event.touches[0].pageY, event.touches[0].pageX];
			}
		};

		const isDown = () => {
			mouse.down = !mouse.down;
		};

		window.addEventListener("touchmove", setPos);
		window.addEventListener("mousemove", setMousePos);
		window.addEventListener("mousedown", isDown);
		window.addEventListener("mouseup", isDown);
		window.addEventListener("touchstart", isDown);
		window.addEventListener("touchend", isDown);
	}, []);

	return (
		<Wrapper>
			<canvas id="particles">Your browser does not support a canvas</canvas>
		</Wrapper>
	);
};

export default memo(ParticlesV2);
