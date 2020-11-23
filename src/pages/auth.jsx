import React, {useState, useContext, useEffect} from "react";

import {Layout, Context} from "../components/layout";
import '../styles/general.css';
import {CircularProgress } from '@material-ui/core/';

import firebase from "firebase";
import { provider, auth, db } from '../modules/firebase/firebase';


export default function Home({data}) {
  const dat = useContext(Context);

  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("🚀 dat", dat)
  }, [dat]);

  const logIn = () => {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
      auth.signInWithPopup(provider).then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;
        setUser(user)    
      }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        alert(errorMessage);
        
        throw console.log("error: ", errorCode, errorMessage, credential, email)
      });
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
      throw console.log("error: ", errorCode, errorMessage)
    });
  }


  return (
    <Layout>
      {!user? 
        (
          <div>
            Верстка для неавторизованого користувача
            <CircularProgress color="secondary" />
            <button onClick={logIn}>
              Увійти
            </button>
          </div>
        )
          :
        (
          <div>
            Верстка для користувача в системі
          </div>
        )
      }
    </Layout>
  )
};