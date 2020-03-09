import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as firebaseApp from "firebase";
import firebase from "@firebase/app";
import "@firebase/database";

import firebaseKeys from "./keys.json";

const app = !firebaseApp.apps.length
  ? firebaseApp.initializeApp(firebaseKeys)
  : firebaseApp.app();

export const useDataBase = (url, action) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (url === null) return;
    let listeners = [];
    const ref = app.database().ref(url);
    listeners.push(
      ref.on("value", snapshot => {
        if (snapshot && snapshot.val) {
          dispatch(action(snapshot.val()));
        }
      })
    );
    return () => {
      for (let unsub of listeners) {
        unsub();
      }
    };
  }, [url, action]);
};

const loadDB = () => {
  try {
    const config = {
      apiKey: "AIzaSyCgQmJyPmf3fRHQMxi2WRqHFG7bzywCUkA",
      authDomain: "merco-web.firebaseapp.com",
      databaseURL: "https://merco-web.firebaseio.com",
      projectId: "merco-web",
      storageBucket: "merco-web.appspot.com",
      messagingSenderId: "290035762727",
      appId: "1:290035762727:web:f679aec93f76e0fc16f002"
    };
    firebase.initializeApp(config)
    // firebase.database().ref().o
  } catch (error) {
    if(!/already exist/.test(error.message)){
      console.error('Firebase initialization error', error.stack)
    }
  }
  return firebase
};

export default loadDB;