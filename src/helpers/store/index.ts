import { configureStore } from "@reduxjs/toolkit";
import preloader from "./reducers/preloader";

const store = configureStore({
	reducer: {
		preloader: preloader,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
