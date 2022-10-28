import Head from "next/head";
import { NextPage } from "next";
import Page from "src/components/Page";
import About from "src/components/About";

const AboutPage: NextPage = () => {
	return (
		<Page>
			<Head>
				<title>JY | About</title>
			</Head>
			<About />
		</Page>
	);
};

export default AboutPage;
