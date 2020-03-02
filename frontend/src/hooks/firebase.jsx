import firebaseKeys from './keys.json';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import * as firebaseApp from "firebase"

const app = !firebaseApp.apps.length ? firebaseApp.initializeApp(firebaseKeys) : firebaseApp.app();

  export const useDataBase = (url, action) => {
    const dispatch = useDispatch();

    useEffect(()=>{
      if ( url === null) return;
      let listeners = [];
        const ref = app.database().ref(url);
        listeners.push(
          ref.on('value', snapshot => {
            if(snapshot && snapshot.val){
              dispatch(action(snapshot.val()))
            }
          })
        )
      return () => {
        for (let unsub of listeners) {
          unsub();
        }
      };
    }, [url, action])

    
}

  