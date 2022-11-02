import { forwardRef, memo, PropsWithChildren } from "react";
import { Wrapper } from "./style";

interface PropTypes extends React.ComponentPropsWithoutRef<"button"> {
	status?: "" | "loading" | "error" | "success";
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<PropTypes>>((props, ref) => {
	return (
		<Wrapper status={props.status} ref={ref} {...props}>
			{props.children}
		</Wrapper>
	);
});

export default memo(Button);
