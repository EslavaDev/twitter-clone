import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/layout/layout";
import { BoxSend } from "../components/box-send";
import { useDataBase } from "../hooks/firebase";
import { fetchTweets } from "../store/tweets/actions";
import { getTweetsData } from "../store/tweets/selectors";
import { BoxRecive } from "../components/box-recive";

const Home = () => {
  useDataBase("/tweets", fetchTweets);
  const tweetsSelector = useSelector(getTweetsData);
  return (
    <Layout title={"Inicio"}>

      <BoxSend>
      <BoxRecive data={tweetsSelector} />
      </BoxSend>
    </Layout>
  );
};
export default Home;
