import React, {useState, useContext, useEffect} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './user.css';

import {CircularProgress } from '@material-ui/core/';
import firebase from "firebase";
import { provider, db } from '../modules/firebase/firebase';

import {Chat} from './chats/chats';



export const Context = React.createContext();

export const Provider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Context.Provider value={[user, setUser]}>
        {children}
      </Context.Provider>
    </Router>
  )
}

export const Interactive = () => {
  

  return (
    <Provider>
      <Auth />
    </Provider>
  )
}

export const Auth = () => {
  const [user, setUser] = useContext(Context);
  // auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

  const logIn = () => {
    firebase.auth().signInWithPopup(provider).then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      setUser(user);
    }).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      alert('Autorization fail');
      
      throw console.log("error: ", errorCode, errorMessage, credential, email)
    });
  }

  const UserAudit = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUser(user);
      } else {
        logIn()
      }
    });
  }

  useEffect(() => {
    UserAudit();
  }, []);

  return (
    <section>
      {!user? 
        (
          <div className='login-page'>
            <CircularProgress color="secondary" />
          </div>
        )
          :
        (
          <div>
            <Chat />
          </div>
        )
      }
    </section>
  )
}
