import { forwardRef, memo, PropsWithChildren } from "react";
import { Wrapper } from "./style";

interface PropTypes extends React.ComponentPropsWithoutRef<"button"> {}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<PropTypes>>((props, ref) => {
	return (
		<Wrapper ref={ref} {...props}>
			{props.children}
		</Wrapper>
	);
});

export default memo(Button);
