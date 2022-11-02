import React, { memo, useEffect } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	overflow: hidden;
	left: 0;
	z-index: -1;
	width: 100%;
	filter: brightness(80%);
`;

interface IProperties {
	color: string;
	count: number;
	radius: number;
	velocity: number;
	w: number;
	h: number;
	lineLength: number;
	clickDistance: number;
	acceleration: number;
}

const Canvas: React.FC = () => {
	useEffect(() => {
		const canvas: HTMLCanvasElement = document.getElementById("particles") as HTMLCanvasElement;
		const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

		// Массив точек на экране
		const particles: Particle[] = [];

		let whichColor = Math.random() > 0.5 ? true : false;
		const getColor = (a: number = 1): string => {
			const r = whichColor ? "8" : "253";
			const g = whichColor ? `253` : "33";
			const b = whichColor ? `216` : "85";

			return `rgba(${r}, ${g}, ${b}, ${a})`;
		};

		// Настройки
		const properties: IProperties = {
			color: getColor(1),
			radius: 3,
			count: document.documentElement.clientWidth > 574.98 ? 100 : 40,
			velocity: 0.7,
			w: document.documentElement.clientWidth,
			h: 720,
			lineLength: 150,
			clickDistance: 50,
			acceleration: 2,
		};

		/* ------------------------------------ */

		// Размеры холста
		const setScale = () => {
			canvas.width = document.documentElement.clientWidth;
			properties.w = document.documentElement.clientWidth;
		};

		window.addEventListener("resize", setScale);
		setScale();
		canvas.height = properties.h;

		/* ------------------------------------ */

		// Класс точки
		class Particle {
			public x: number;
			public y: number;
			public velocityX: number;
			public velocityY: number;

			constructor() {
				this.x = Math.random() * innerWidth;
				this.y = Math.random() * 680;
				this.velocityX = Math.random() * (properties.velocity * 2) - properties.velocity;
				this.velocityY = Math.random() * (properties.velocity * 2) - properties.velocity;
			}

			position() {
				// Если точка хочет вылетить за экран, то устанавливаем противоположное движение
				if (
					(this.x + this.velocityX > properties.w && this.velocityX > 0) ||
					(this.x + this.velocityX < 0 && this.velocityX < 0)
				) {
					this.velocityX *= -1;
				}

				if (
					(this.y + this.velocityY > properties.h && this.velocityY > 0) ||
					(this.y + this.velocityY < 0 && this.velocityY < 0)
				) {
					this.velocityY *= -1;
				}

				this.x += this.velocityX;
				this.y += this.velocityY;
			}

			// При клике на документ ускоряем точки
			reDrawOnClick() {
				this.velocityX *= properties.acceleration;
				this.velocityY *= properties.acceleration;

				// И возвращаем скорость через секунду
				setTimeout(() => {
					this.velocityX /= properties.acceleration;
					this.velocityY /= properties.acceleration;
				}, 1000);
			}

			reDraw() {
				ctx.beginPath();
				ctx.arc(this.x, this.y, properties.radius, 0, Math.PI * 2);
				ctx.closePath();
				ctx.fillStyle = properties.color;
				ctx.fill();
			}
		}

		/* ------------------------------------ */

		// Линии
		const drawLines = () => {
			let x1, x2, y1, y2, length, opacity;

			for (let i = 0; i < particles.length; i++) {
				for (let j = 0; j < particles.length; j++) {
					x1 = particles[i].x;
					x2 = particles[j].x;
					y1 = particles[i].y;
					y2 = particles[j].y;
					// Формула нахождение диогонали
					length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

					if (length < properties.lineLength) {
						opacity = 1 - length / properties.lineLength;
						ctx.lineWidth = 2;
						ctx.strokeStyle = getColor(opacity);
						ctx.beginPath();
						ctx.moveTo(x1, y1);
						ctx.lineTo(x2, y2);
						ctx.closePath();
						ctx.stroke();
					}
				}
			}
		};

		const clickHandler = (e: MouseEvent) => {
			for (let i = 0; i < particles.length; i++) {
				const particle = particles[i];
				particle.reDrawOnClick();
			}
		};

		// Рисуем
		const draw = () => {
			for (let i in particles) {
				particles[i].reDraw();
				particles[i].position();
			}
		};

		// Бесконечная перерисовка
		const loop = () => {
			draw();
			drawLines();
			requestAnimationFrame(() => {
				ctx.clearRect(0, 0, innerWidth, properties.h);
				loop();
			});
		};

		const init = () => {
			for (let i = 0; i <= properties.count; i++) {
				particles.push(new Particle());
			}

			document.addEventListener("click", clickHandler);
			loop();
		};

		init();
	}, []);

	return (
		<Wrapper>
			<canvas id="particles">Your browser does not support a canvas</canvas>
		</Wrapper>
	);
};

export default memo(Canvas);
