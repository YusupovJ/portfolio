import React, { Dispatch, memo, SetStateAction, useEffect, useState } from "react";
import { Content, Wrapper } from "./style";
import { bodyGapToggle } from "src/helpers/functions";

interface PropTypes extends React.ComponentPropsWithoutRef<"div"> {
	visible: boolean;
	setVisible: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<PropTypes> = (props) => {
	const [isClosing, setIsClosing] = useState<boolean>(false);

	const closeModal = () => {
		setIsClosing(true);

		setTimeout(() => {
			setIsClosing(false);
			props.setVisible(false);
		}, 300);
	};

	const closeOnTapOut = (e: React.MouseEvent) => {
		e.stopPropagation();
		closeModal();
	};

	useEffect(() => {
		bodyGapToggle(props.visible);
	}, [props.visible]);

	if (!props.visible) return null;

	return (
		<Wrapper isClosing={isClosing} onClick={closeOnTapOut}>
			<Content isClosing={isClosing}>{props.children}</Content>
		</Wrapper>
	);
};

export default memo(Modal);
