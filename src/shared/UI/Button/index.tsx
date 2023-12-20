import { forwardRef, memo, PropsWithChildren, useState } from "react";
import { Wrapper } from "./style";
import Spinner from "src/assets/svg/Spinner.svg";

interface PropTypes extends React.ComponentPropsWithoutRef<"button"> {
	status?: "" | "loading" | "error" | "success";
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<PropTypes>>((props, ref) => {
	return (
		<Wrapper status={props.status} ref={ref} {...props}>
			{props.children}
			<div className="button-loader">{props.status === "loading" && <Spinner />}</div>
		</Wrapper>
	);
});

export default memo(Button);
