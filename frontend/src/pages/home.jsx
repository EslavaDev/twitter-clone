import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/layout/layout";
import { BoxSend } from "../components/box-send";
import loadFirebase, { useDataBase } from "../hooks/firebase";
import { fetchTweets } from "../store/tweets/actions";
import { getTweetsData } from "../store/tweets/selectors";
import { BoxRecive } from "../components/box-recive";
const Home = ({ props }) => {
  useDataBase("/tweets", fetchTweets);
  const tweetsSelector = useSelector(getTweetsData)
  console.log(props, tweetsSelector);
  return (
    <Layout title={"Inicio"}>
      <BoxSend>
        <BoxRecive data={tweetsSelector} />
      </BoxSend>
    </Layout>
  );
};

Home.getInitialProps = async (props) => {
  const firebase = await loadFirebase();
  const db = firebase.database();
  const ref = db.ref('/tweets')
      ref.once("value", snapshot => {
        if (snapshot && snapshot.val) {
          props.store.dispatch(fetchTweets(snapshot.val()))
          return snapshot.val()
        }
      })
    
  return {data: 'none'};
};

export default Home;
