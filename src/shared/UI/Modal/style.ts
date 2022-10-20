import styled, { keyframes } from "styled-components";

interface PropTypes {
	isClosing: boolean;
}

const onOpenWrapper = keyframes`
    from {
        background-color: transparent;
    } to {
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const onCloseWrapper = keyframes`
    from {
        background-color: rgba(0, 0, 0, 0.5);
    } to {
        background-color: transparent;
    }
`;

const onOpenContainer = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const onCloseContainer = keyframes`
    from {
        opacity: 1;
    } to {
        opacity: 0;
    }
`;

export const Wrapper = styled.div<PropTypes>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${(props) => (props.isClosing ? onCloseWrapper : onOpenWrapper)} 0.3s ease 0s 1 normal forwards;
`;

export const Content = styled.div<PropTypes>`
	background-color: #fff;
	padding: 20px;
	opacity: 0;
	animation: ${(props) => (props.isClosing ? onCloseContainer : onOpenContainer)} 0.3s ease 0s 1 normal forwards;
`;
