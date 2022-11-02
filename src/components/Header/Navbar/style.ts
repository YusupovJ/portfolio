import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: stretch;
	flex: 1 1 auto;
	width: 100%;
	.link {
		line-height: 3rem;
		border-bottom: 1px solid #282828;
		color: ${({ theme }) => theme.colors.textSecondary};
		font-size: 1rem;
		transition: color 0.3s;
		&:first-child {
			border-top: 1px solid #282828;
		}
		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
