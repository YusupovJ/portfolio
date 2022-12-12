import React, { Dispatch, forwardRef, memo, SetStateAction, useState } from "react";
import { ErrorText, Field, PasswordVisibilityToggler, TextAreaField, Wrapper } from "./style";
import EyeVisible from "src/assets/svg/EyeVisible.svg";
import EyeInvisible from "src/assets/svg/EyeInvisible.svg";

type validateInput = (target: EventTarget & HTMLInputElement, setError: Dispatch<SetStateAction<string>>) => void;

interface PropTypes extends React.ComponentPropsWithoutRef<"input"> {
	error?: string;
	variant?: "text" | "number" | "email" | "password";
	validate?: "email" | "password" | validateInput;
	textArea?: boolean;
}

const Input = forwardRef<HTMLInputElement, PropTypes>((props, ref) => {
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
	const [error, setError] = useState<string>(props.error || "");

	const togglePasswordVisible = (e: any) => {
		const input: HTMLInputElement = e.target.closest("button").previousElementSibling;
		input.setAttribute("type", passwordVisible ? "password" : "text");
		setPasswordVisible((passwordVisible) => !passwordVisible);
	};

	const emailValidate = (target: EventTarget & HTMLInputElement) => {
		const regExp =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

		let errorText: string = "";

		if (!regExp.test(target.value) && target.value) {
			errorText = "Неправильно введена почта!";
		} else {
			target.dataset.error = "";
		}

		setError(errorText);
	};

	const passwordValidate = (target: EventTarget & HTMLInputElement) => {
		const length = /.{6,}/.test(target.value);
		const number = /(?=.*[0-9])/.test(target.value);
		const letter = /(?=.*[a-zA-Z])/.test(target.value);

		let errorText: string = "";

		if (target.value) {
			if (!length) {
				errorText = "Слишком короткий пароль!";
			} else if (!number) {
				errorText = "Пароль должен содержать хотя бы одну цифру!";
			} else if (!letter) {
				errorText = "Пароль должен содержать хотя бы одну букву!";
			}
		} else {
			target.dataset.error = "";
		}

		setError(errorText);
	};

	const validate = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (props.validate) {
			if (typeof props.validate === "string") {
				if (props.validate === "email") {
					return emailValidate(event.target);
				}

				return passwordValidate(event.target);
			}

			return props.validate(event.target, setError);
		}
	};

	const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		validate(event);

		if (event.target.dataset.error === "error") {
			event.target.dataset.error = "";
		}
	};

	return (
		<Wrapper className={props.className}>
			{props.textArea ? (
				<TextAreaField placeholder={props.placeholder} name={props.name} />
			) : (
				<Field
					{...props}
					onBlur={blurHandler}
					data-error={error && "error"}
					type={props.variant}
					visible={passwordVisible}
					ref={ref}
					className=""
				/>
			)}
			{props.variant === "password" && (
				<PasswordVisibilityToggler type="button" onClick={togglePasswordVisible}>
					{passwordVisible ? <EyeInvisible /> : <EyeVisible />}
				</PasswordVisibilityToggler>
			)}
			<span className="line"></span>
			<ErrorText>{error}</ErrorText>
		</Wrapper>
	);
});

export default memo(Input);
