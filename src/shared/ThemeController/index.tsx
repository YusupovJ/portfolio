import React, { memo, useEffect } from "react";
import { darkTheme, lightTheme } from "src/styles";
import { useAppSelector } from "src/helpers/hooks";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { setOCTheme } from "src/helpers/store/reducers/themeToggler";

interface PropTypes {
	children: React.ReactNode;
	ocTheme?: boolean;
}

const ThemeController = (props: PropTypes) => {
	const dispatch = useDispatch();
	const state = useAppSelector((state) => state.themeToggler.theme);

	useEffect(() => {
		if (props.ocTheme) {
			dispatch(setOCTheme());
		}
	}, []);

	return <ThemeProvider theme={state === "light" ? lightTheme : darkTheme}>{props.children}</ThemeProvider>;
};

export default memo(ThemeController);
