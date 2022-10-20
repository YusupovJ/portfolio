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
