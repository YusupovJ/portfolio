import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { GlobalStyles } from "src/styles";
import ThemeController from "src/shared/ThemeController";
import store from "src/helpers/store";
import Header from "src/components/Header";
import Preloader from "src/components/Preloader";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ThemeController>
				<GlobalStyles />
				<div style={{ display: "flex" }}>
					<Header />
					<Preloader />
					<Component {...pageProps} />
				</div>
			</ThemeController>
		</Provider>
	);
}

export default MyApp;
