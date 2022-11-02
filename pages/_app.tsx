import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { GlobalStyles } from "src/styles";
import ThemeController from "src/shared/ThemeController";
import store from "src/helpers/store";
import Header from "src/components/Header";
import Preloader from "src/components/Preloader";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
`;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ThemeController>
				<GlobalStyles />
				<Wrapper>
					<Header />
					<Preloader />
					<Component {...pageProps} />
				</Wrapper>
			</ThemeController>
		</Provider>
	);
}

export default MyApp;
