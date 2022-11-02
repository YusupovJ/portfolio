import { createSlice } from "@reduxjs/toolkit";

interface IInitial {
	active: boolean;
	status: "start" | "pending" | "complete";
}

const preloader = createSlice({
	name: "preloader",
	initialState: { active: false, status: "start" } as IInitial,
	reducers: {
		showPreloader(state) {
			state.active = true;
		},
		hidePreloader(state) {
			state.active = false;
		},
		changeStatus(state, { payload }) {
			state.status = payload;
		},
	},
});

export const { showPreloader, hidePreloader, changeStatus } = preloader.actions;
export default preloader.reducer;
