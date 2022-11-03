import { useRouter } from "next/router";
import React, { Dispatch, memo, SetStateAction } from "react";
import { useAppDispatch } from "src/helpers/hooks";
import { changeStatus, hidePreloader, showPreloader } from "src/helpers/store/reducers/preloader";

interface Props {
	children: React.ReactNode;
	href: string;
	className?: string;
	onClick?: Dispatch<SetStateAction<boolean>>;
}

const Link: React.FC<Props> = (props) => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleClick = (event: React.MouseEvent) => {
		event.preventDefault();

		if (props.href !== router.pathname) {
			dispatch(showPreloader());
			dispatch(changeStatus("pending"));

			setTimeout(() => {
				router.push(props.href);

				router.events.on("routeChangeComplete", () => {
					dispatch(changeStatus("complete"));

					setTimeout(() => {
						dispatch(hidePreloader());
						dispatch(changeStatus("start"));
					}, 1000);
				});
			}, 1000);

			if (props.onClick) {
				props.onClick(false);
			}
		}
	};

	return (
		<a href={props.href} className={props.className} onClick={handleClick}>
			{props.children}
		</a>
	);
};

export default memo(Link);
