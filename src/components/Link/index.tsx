import { useRouter } from "next/router";
import React, { Dispatch, memo, SetStateAction } from "react";
import { useAppDispatch } from "src/helpers/hooks";
import { hide, show } from "src/helpers/store/reducers/preloader";

interface Props {
	children: React.ReactNode;
	href: string;
	className?: string;
	onClick?: Dispatch<SetStateAction<boolean>>;
}

const Link: React.FC<Props> = (props) => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(show());
		setTimeout(() => {
			router.push(props.href);
			router.events.on("routeChangeComplete", () => {
				dispatch(hide());
			});
		}, 1000);
		if (props.onClick) {
			props.onClick(false);
		}
	};

	return (
		<button type="button" className={props.className} onClick={handleClick}>
			{props.children}
		</button>
	);
};

export default memo(Link);
