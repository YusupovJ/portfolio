import { NextPage } from "next";
import Head from "next/head";
import Page from "src/components/Page";
import Skills from "src/components/Skills";

const SkillsPage: NextPage = () => {
	return (
		<Page>
			<Head>
				<title>JY | My skills</title>
			</Head>
			<Skills />
		</Page>
	);
};

export default SkillsPage;
