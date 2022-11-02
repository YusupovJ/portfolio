import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		borderRad: string;
		secondaryFont: string;
		colors: {
			primary: string;
			secondary: string;
			text: string;
			bg: string;
			bgSecondary: string;
			textSecondary: string;
			tag: string;
			bgThird: string;
			selection: string;
			active: string;
		};
	}
}
