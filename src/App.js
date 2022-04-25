import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList/EmailList';
import Header from './components/Header/Header';
import Mail from './components/Mail/Mail';
import SendMail from './components/SendMail/SendMail';
import Sidebar from './components/Sidebar/Sidebar';
import { useDispatch, useSelector } from "react-redux";
import { fetchEmails, selectSendMessageIsOpen, starMail } from './features/mailSlice'

import { login } from "./features/userSlice"

import { collection, query, where, onSnapshot } from "firebase/firestore"
import { auth, db } from './firebase/firebase';
import { selectUserState } from './features/userSlice';
import Login from './components/Login/Login';
import { setPersistence, browserSessionPersistence } from "firebase/auth";


function App() {  
  const  sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const dispatch = useDispatch()
  const { user }  = useSelector(selectUserState)

  useEffect(() => {
    let unsubscribe
    (async() => { 
      try {
        const q = query(collection(db, "emails"));
        unsubscribe = onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            console.log("ttriggere")
            if(change.type == "added"){
              dispatch(fetchEmails( change.doc.data() ))
              return
            }
            if(change.type == "modified"){
              console.log("modified!!!", change.doc.data())
              dispatch(starMail(change.doc.data()))
            }
          });
        });
  
      } catch (error) {
        console.log({error})
      }
  
    })()


    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    }) 

    return ()=> unsubscribe()

  }, [])
  

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
      <div className="App">
        <Header />

        <div className='app_body'>
          <Sidebar />

          <Switch>
            <Route path="/mail"><Mail /></Route>
            <Route path="/"><EmailList /></Route>
          </Switch>
        </div>

        {sendMessageIsOpen &&  <SendMail />} 
      </div>)
      }
    </Router>
  );
}

export default App;
