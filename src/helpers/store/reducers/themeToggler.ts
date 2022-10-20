import { createSlice } from "@reduxjs/toolkit";

var localStorage: any;
const currentTheme = localStorage && localStorage?.getItem("theme");

const themeToggler = createSlice({
	name: "theme toggler",
	initialState: { theme: currentTheme || "dark" },
	reducers: {
		toggle(state) {
			state.theme = state.theme === "light" ? "dark" : "light";
			localStorage.setItem("theme", state.theme);
		},
		setOCTheme(state) {
			const media = "(prefers-color-scheme: light)";
			const themeOCisLight = window.matchMedia(media).matches;

			state.theme = currentTheme || (themeOCisLight ? "light" : "dark");
		},
	},
});

export const { toggle, setOCTheme } = themeToggler.actions;
export default themeToggler.reducer;
