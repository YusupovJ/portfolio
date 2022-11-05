import Head from "next/head";
import { NextPage } from "next";
import MagicWall from "src/components/MagicWall";
import Page from "src/components/Page";

const HomePage: NextPage = () => {
	return (
		<Page>
			<Head>
				<title>JY | My works</title>
			</Head>
			<MagicWall />
		</Page>
	);
};

export default HomePage;
