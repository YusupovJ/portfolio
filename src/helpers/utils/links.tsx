import { ILinks } from "../types";
import Telegram from "src/assets/svg/Telegram.svg";
import GitHub from "src/assets/svg/GitHub.svg";
import LinkedIn from "src/assets/svg/LinkedIn.svg";

export const links: ILinks[] = [
	{
		id: 1,
		icon: <LinkedIn />,
		href: "https://github.com/YusupovJ",
	},
	{
		id: 2,
		icon: <GitHub />,
		href: "https://github.com/YusupovJ",
	},
	{
		id: 3,
		icon: <Telegram />,
		href: "https://t.me/jamshudanamana",
	},
];
