import { configureStore } from "@reduxjs/toolkit";
import themeToggler from "./reducers/themeToggler";

const store = configureStore({
	reducer: {
		themeToggler: themeToggler,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
