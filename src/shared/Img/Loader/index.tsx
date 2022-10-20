import React, { memo } from "react";
import { Wrapper } from "./style";

interface Props {}

const Loader: React.FC<Props> = (props) => {
	return <Wrapper></Wrapper>;
};

export default memo(Loader);
