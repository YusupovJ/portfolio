import { createSlice } from "@reduxjs/toolkit";

const preloader = createSlice({
	name: "preloader",
	initialState: { active: false, closed: false },
	reducers: {
		show(state) {
			state.active = true;
		},
		hide(state) {
			state.active = false;
		},
	},
});

export const { show, hide } = preloader.actions;
export default preloader.reducer;
