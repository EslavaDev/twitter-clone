import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/layout/layout";
import { BoxSend } from "../components/box-send";
import { useDataBase } from "../hooks/firebase";
import { fetchTweets } from "../store/tweets/actions";
import { getTweetsData } from "../store/tweets/selectors";
import { BoxRecive } from "../components/box-recive";

const Home = ({tweetsSelector}) => {
  // useDataBase("/tweets", fetchTweets);
  console.log(tweetsSelector)
  return (
    <Layout title={"Inicio"}>

      <BoxSend>
      <BoxRecive data={tweetsSelector} />
      </BoxSend>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  await useDataBase("/tweets", fetchTweets);
  const tweetsSelector = useSelector(getTweetsData);
  console.log(tweetsSelector, 'test')

  // Pass data to the page via props
  return { props: { tweetsSelector } }
}


export default Home;
