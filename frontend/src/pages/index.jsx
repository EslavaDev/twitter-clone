import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getSearch, getUserName } from "../store/layout/selectors";
import { Button } from "semantic-ui-react";
import { setUserAnonymous } from "../store/layout/actions";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const selector = useSelector(getSearch);
  const userAnonymous = useSelector(getUserName);
  useEffect(() => {
    if (userAnonymous) router.push("/home");
  }, []);
  const handleclick = async () => {
    await dispatch(setUserAnonymous());
    console.log("click");
    await router.push("/home");
  };
  return (
    <div
      style={{
        flex: 1,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Button onClick={handleclick}>Continuar</Button>
    </div>
  );
};
export default Index;
