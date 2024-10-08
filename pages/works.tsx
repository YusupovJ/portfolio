import Head from "next/head";
import { NextPage } from "next";
import Page from "src/components/Page";
import MyPortfolio from "src/components/MyPortfolio";

const HomePage: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>JY | My works</title>
      </Head>
      <MyPortfolio />
    </Page>
  );
};

export default HomePage;
