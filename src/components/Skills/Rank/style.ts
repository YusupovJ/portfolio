import { rem } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 1.3rem;
	margin: 3rem 0px;
	background: ${(props) => props.theme.colors.bgThird};
`;

export const Title = styled.h4`
	font-family: ${(props) => props.theme.secondaryFont};
	font-size: ${rem(25)};
	line-height: 1;
	margin: 0px 0px 20px 0px;
`;

export const Date = styled.span`
	display: inline-block;
	font-size: ${rem(14)};
	color: ${(props) => props.theme.colors.textSecondary};
`;

export const Text = styled.p`
	color: ${(props) => props.theme.colors.textSecondary};
	margin: 10px 0px 0px 0px;
`;
