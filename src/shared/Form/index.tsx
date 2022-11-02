import React, { memo, useRef } from "react";

interface PropTypes extends React.ComponentPropsWithoutRef<"form"> {
	children: React.ReactNode;
	submit: (values: any) => void;
}

const Form: React.FC<PropTypes> = ({ submit, children, ...props }) => {
	const formRef = useRef<HTMLFormElement>(null);

	const checkValid = (): boolean => {
		if (formRef.current) {
			const children: HTMLInputElement[] = Array.from(formRef.current.querySelectorAll("input"));

			for (let child of children) {
				if (child?.dataset.error === "error" || (child.required && !child?.value)) {
					return false;
				}
			}
		}

		return true;
	};

	const getValues = () => {
		if (formRef.current) {
			const children: HTMLInputElement[] = Array.from(formRef.current.querySelectorAll("input"));

			const values: any = {};

			for (const child of children) {
				values[child.name] = child[child.type === "checkbox" ? "checked" : "value"];
			}

			return values;
		}
	};

	const handleNoValues = (): boolean => {
		if (formRef.current) {
			const children: HTMLInputElement[] = Array.from(formRef.current.querySelectorAll("input[required]"));

			console.log(children);

			for (const child of children) {
				if (!child.value) {
					child.dataset.error = "error";
				}
			}
		}

		return true;
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		const valid = await checkValid();
		const values = await getValues();
		const noValues = await handleNoValues();

		if (valid && noValues) {
			submit(values);
		}
	};

	return (
		<form {...props} noValidate ref={formRef} onSubmit={handleSubmit}>
			{children}
		</form>
	);
};

export default memo(Form);
