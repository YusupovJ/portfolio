import React, { memo } from "react";
import { useAppSelector } from "src/helpers/hooks";
import { Logo, ProgressBar, Wrapper } from "./style";

interface Props {}

const Preloader: React.FC<Props> = (props) => {
	const active = useAppSelector((state) => state.preloader.active);

	return (
		<Wrapper active={active}>
			<Logo />
			<h4>Jamshid</h4>
			<p>Jamshid is thinking</p>
			<ProgressBar active={active}>
				<div></div>
			</ProgressBar>
		</Wrapper>
	);
};

export default memo(Preloader);
