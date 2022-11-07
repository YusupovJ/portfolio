import React, { memo } from "react";
import Article from "../Article";
import ContactForm from "../ContactForm";
import Maps from "../Maps";
import Section from "../Section";
import { Wrapper } from "./style";

const ContactMe: React.FC = () => {
	return (
		<Wrapper>
			<Section className="contact-section" bg="Contact" position={["left", "top"]}>
				<Article title="Contact me">
					At the moment I agree to the development of any sites, so if you have any suggestions feel free to
					contact me
				</Article>
				<ContactForm />
			</Section>
			<Maps />
		</Wrapper>
	);
};

export default memo(ContactMe);
