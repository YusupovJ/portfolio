import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import Form from "src/shared/Form";
import { Button, Input } from "src/shared/UI";
import Tag from "../Tag";
import { Wrapper } from "./style";

interface Props {}

const ContactForm: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			<Tag tagName="form" noWriteTag>
				<Form className="form-wrapper" submit={(values) => {}}>
					<Fade direction="up" className="form-input">
						<Input variant="text" placeholder="Name" name="name" />
					</Fade>

					<Fade direction="up" className="form-input">
						<Input variant="email" placeholder="Email" required validate="email" name="email" />
					</Fade>
					<Fade direction="up" className="form-textarea">
						<Input placeholder="Message" name="message" textArea />
						<Button>Send message</Button>
					</Fade>
				</Form>
			</Tag>
		</Wrapper>
	);
};

export default memo(ContactForm);
