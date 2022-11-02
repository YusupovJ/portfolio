import Image, { ImageProps } from "next/image";
import React, { memo, useState } from "react";
import NotImage from "src/assets/svg/NotImage.svg";
import Loader from "./Loader";
import { Error, Wrapper } from "./style";

const Img: React.FC<ImageProps> = (props) => {
	const [error, setError] = useState<boolean>(false);
	const [loaded, setLoaded] = useState<boolean>(false);

	const handleLoad = () => {
		setLoaded(true);
	};

	const handleError = () => {
		setError(true);
	};

	if (error) {
		return (
			<Error maxWidth={props.width} maxHeight={props.height}>
				<NotImage />
			</Error>
		);
	}

	return (
		<Wrapper>
			<Image {...props} onLoad={handleLoad} onError={handleError} alt="" />
			{!loaded && <Loader />}
		</Wrapper>
	);
};

export default memo(Img);
