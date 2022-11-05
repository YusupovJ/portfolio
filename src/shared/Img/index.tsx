import Image, { ImageProps } from "next/image";
import React, { memo, useState } from "react";
import NotImage from "src/assets/svg/NotImage.svg";
import { Error } from "./style";

const Img: React.FC<ImageProps> = (props) => {
	const [error, setError] = useState<boolean>(false);

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

	return <Image {...props} onError={handleError} alt="" />;
};

export default memo(Img);
