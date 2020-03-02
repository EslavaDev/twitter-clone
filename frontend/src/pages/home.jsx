import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getSearch } from "../store/layout/selectors";
import Layout from "../components/layout/layout";
import { Button } from "semantic-ui-react";
import { BoxSend } from "../components/box-send";
import { useDataBase } from "../hooks/firebase";
import { fetchTweets } from "../store/tweets/actions";
import { getTweetsData } from "../store/tweets/selectors";
import { BoxRecive } from "../components/box-recive";

const Home = () => {
  useDataBase("/tweets", fetchTweets);
  const tweetsSelector = useSelector(getTweetsData);
  console.log(tweetsSelector);
  return (
    <Layout title={"Inicio"}>

      <BoxSend>
      <BoxRecive data={tweetsSelector} />
      </BoxSend>
    </Layout>
  );
};
export default Home;
