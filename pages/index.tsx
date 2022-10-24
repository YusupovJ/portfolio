import Head from "next/head";
import { NextPage } from "next";
import Page from "src/components/Page";
import Home from "src/components/Home";
import MyPortfolio from "src/components/MyPortfolio";
import Particles from "src/components/Particles";
import About from "src/components/About";

const HomePage: NextPage = () => {
	return (
		<>
			<Particles />

			<Page>
				<Head>
					<title>JY | Frontend Developer</title>
				</Head>
				<Home />
				<MyPortfolio />
				<About />
			</Page>
		</>
	);
};

export default HomePage;
