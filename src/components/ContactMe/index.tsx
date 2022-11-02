import React, { memo } from "react";
import Article from "../Article";
import ContactForm from "../ContactForm";
import Maps from "../Maps";
import Section from "../Section";
import { Wrapper } from "./style";

interface Props {}

const ContactMe: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			<Section className="contact-section" bg="Contact" position={["left", "top"]}>
				<Article title="Contact me">
					I am interested in freelance opportunities – especially ambitious or large projects. However, if you
					have other request or question, do not hesitate to use the form.
				</Article>
				<ContactForm />
			</Section>
			<Maps />
		</Wrapper>
	);
};

export default memo(ContactMe);
