import { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { toggle } from "../store/reducers/themeToggler";

// Хуки типизированных useDispatch и useSelector в redux

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* ------------------------------------ */

// Хук для сетевого запроса

type methodType = "GET" | "POST" | "PUT" | "DELETE";
type statusType = "loading" | "success" | "error";

export const useAsync = <T, U>(url: string, method: methodType, contentType: string) => {
	const [response, setResponse] = useState<U | null>(null);
	const [error, setError] = useState<string>("");
	const [status, setStatus] = useState<statusType>("loading");

	const send = (body: T): void => {
		fetch(url, {
			method,
			headers: {
				"Content-type": contentType,
			},
			body: JSON.stringify(body),
		})
			.then((res) => res.json())
			.then((response) => {
				setResponse(response);
				setStatus("success");
			})
			.catch((error) => {
				setStatus("error");
				setError(error.message);
			});
	};

	return { send, response, error, status };
};

/* ------------------------------------ */

// Хук изменения темы

export const useThemeToggler = () => {
	const dispatch = useAppDispatch();

	return () => {
		dispatch(toggle());
	};
};
