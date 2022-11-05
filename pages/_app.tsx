import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { GlobalStyles } from "src/styles";
import ThemeController from "src/shared/ThemeController";
import store from "src/helpers/store";
import Header from "src/components/Header";
import Preloader from "src/components/Preloader";
import styled, { keyframes } from "styled-components";

const animateFade = keyframes`
	from {
		background-color: #000000;
		z-index: 99999;
	}
	to {
		background-color: rgba(0, 0, 0, 0);
		z-index: -1;
	}
`;

const Wrapper = styled.div`
	display: flex;
	&::before {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99999;
		animation: ${animateFade} 1s ease 0s 1 normal forwards;
		background-color: #000000;
	}
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
