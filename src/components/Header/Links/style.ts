import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex: 1 1 10%;
	margin: 10px 0px 0px 0px;
	align-items: center;
`;

export const Link = styled.a`
	flex: 0 0 15px;
	height: 15px;
	fill: ${(props) => props.theme.colors.textSecondary};
	transition: all 0.3s ease 0s;
	padding: 4px;
	box-sizing: content-box;
	&:hover {
		fill: ${(props) => props.theme.colors.primary};
	}
`;
