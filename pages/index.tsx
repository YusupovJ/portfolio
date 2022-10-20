import Head from "next/head";
import { NextPage } from "next";
import Page from "src/components/Page";
import Home from "src/components/Home";

const HomePage: NextPage = () => {
	return (
		<Page>
			<Head>
				<title>JY | Frontend Developer</title>
			</Head>
			<Home />
		</Page>
	);
};

export default HomePage;
