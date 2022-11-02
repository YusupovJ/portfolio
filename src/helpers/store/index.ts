import { configureStore } from "@reduxjs/toolkit";
import preloader from "./reducers/preloader";
import themeToggler from "./reducers/themeToggler";

const store = configureStore({
	reducer: {
		themeToggler: themeToggler,
		preloader: preloader,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
