import { useRouter } from "next/router";
import React, { memo } from "react";
import { useAppDispatch } from "src/helpers/hooks";
import { changeStatus, hidePreloader, showPreloader } from "src/helpers/store/reducers/preloader";

interface PropTypes {
	children: React.ReactNode;
	href: string;
	className?: string;
	onClick?: () => void;
}

const Link: React.FC<PropTypes> = (props) => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleClick = (event: React.MouseEvent) => {
		event.preventDefault();

		// Делаем route если мы не тыкнули на ссылку, которая ведет на текущую станицу
		if (props.href !== router.pathname) {
			// Показываем прелоадер сразу
			dispatch(showPreloader());
			dispatch(changeStatus("pending"));

			setTimeout(() => {
				// Спустя секунду route-им
				router.push(props.href);

				router.events.on("routeChangeComplete", () => {
					dispatch(changeStatus("complete"));

					// После того как route удался через некоторое время скрываем прелоадер, чтобы hotbar дошел до конца
					setTimeout(() => {
						dispatch(hidePreloader());
						dispatch(changeStatus("start"));
					}, 700);
				});
			}, 1000);

			// Вызываем еще переданные функции через onClick на ссылку
			if (props.onClick) {
				props.onClick();
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
