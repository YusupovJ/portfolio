import React, { memo } from "react";
import { Spinner, Wrapper } from "./style";

interface Props {}

const Loader: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			<Spinner />
		</Wrapper>
	);
};

export default memo(Loader);
