import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface INavbar {
	id: number;
	title: string;
	href: string;
}

export interface ILinks {
	id: number;
	icon: ReactElement;
	href: string;
}

export interface IWork {
	id: number;
	link: string;
	preview: StaticImageData;
}

export interface ISkills {
	id: number;
	link: string;
	title: string;
}
