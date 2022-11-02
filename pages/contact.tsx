import Head from "next/head";
import { NextPage } from "next";
import Page from "src/components/Page";
import ContactMe from "src/components/ContactMe";

const ContactPage: NextPage = () => {
	return (
		<Page>
			<Head>
				<title>JY | Contact Me</title>
			</Head>
			<ContactMe />
		</Page>
	);
};

export default ContactPage;
