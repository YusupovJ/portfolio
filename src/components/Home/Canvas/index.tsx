import React, { memo, useEffect } from "react";
import { em } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.canvas`
	position: absolute;
	top: 0;
	left: 0;
	z-index: -2;
	filter: brightness(30%);
	@media only screen and (min-width: ${em(991.98)}) {
		transform: translate(130px, 0);
	}
`;

interface IProperties {
	color: string;
	count: number;
	radius: number;
	velocity: number;
	w: number;
	h: number;
	lineLength: number;
}

const Canvas: React.FC = () => {
	useEffect(() => {
		const canvas: HTMLCanvasElement = document.getElementById("particles") as HTMLCanvasElement;
		const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

		// Массив точек на экране
		const particles: Particle[] = [];
		// Настройки
		const properties: IProperties = {
			color: localStorage.getItem("theme") === "light" ? "#FD2155" : "#08fdd8",
			radius: 4,
			count: document.documentElement.clientWidth > 991.98 ? 60 : 40,
			velocity: 1,
			w: document.documentElement.clientWidth > 991.98 ? innerWidth - 130 : innerWidth,
			h: 680,
			lineLength: 150,
		};

		/* ------------------------------------ */

		// Размеры холста

		canvas.width = properties.w;
		canvas.height = properties.h;

		window.addEventListener("resize", () => {
			canvas.width = document.documentElement.clientWidth;
		});

		/* ------------------------------------ */

		// Класс точки
		class Particle {
			public x: number;
			public y: number;
			private velocityX: number;
			private velocityY: number;

			constructor() {
				this.x = Math.random() * innerWidth;
				this.y = Math.random() * 680;
				this.velocityX = Math.random() * (properties.velocity * 2) - properties.velocity;
				this.velocityY = Math.random() * (properties.velocity * 2) - properties.velocity;
			}

			position() {
				// Если точка хочет вылетить за экран, то устанавливаем противоположное движение
				(this.x + this.velocityX > properties.w && this.velocityX > 0) ||
				(this.x + this.velocityX < 0 && this.velocityX < 0)
					? (this.velocityX *= -1)
					: this.velocityX;

				(this.y + this.velocityY > properties.h && this.velocityY > 0) ||
				(this.y + this.velocityY < 0 && this.velocityY < 0)
					? (this.velocityY *= -1)
					: this.velocityY;

				this.x += this.velocityX;
				this.y += this.velocityY;
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
					length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

					if (length < properties.lineLength) {
						opacity = 1 - length / properties.lineLength;
						ctx.lineWidth = 2;
						ctx.strokeStyle =
							localStorage.getItem("theme") === "light"
								? `rgba(253, 33, 85, ${+opacity})`
								: `rgba(8, 253, 216, ${+opacity})`;
						ctx.beginPath();
						ctx.moveTo(x1, y1);
						ctx.lineTo(x2, y2);
						ctx.closePath();
						ctx.stroke();
					}
				}
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

			loop();
		};

		init();
	}, []);

	return <Wrapper id="particles">Your browser don't support canvas</Wrapper>;
};

export default memo(Canvas);
