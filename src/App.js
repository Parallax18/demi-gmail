import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList/EmailList';
import Header from './components/Header/Header';
import Mail from './components/Mail/Mail';
import SendMail from './components/SendMail/SendMail';
import Sidebar from './components/Sidebar/Sidebar';
import { useDispatch, useSelector } from "react-redux";
import { fetchEmails, fetchStarredEmails, selectMailState, selectSendMessageIsOpen, setImportant, starMail } from './features/mailSlice'

import { login } from "./features/userSlice"

import { collection, query, where, onSnapshot, connectFirestoreEmulator } from "firebase/firestore"
import { auth, db } from './firebase/firebase';
import { selectUserState } from './features/userSlice';
import Login from './components/Login/Login';
import { setPersistence, browserSessionPersistence } from "firebase/auth";
import Inbox from "./pages/inbox"
import { Starred } from './pages/starred';

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
          snapshot.docChanges().forEach(async(change) => {
            console.log("triggered")
            const emails = change.doc.data()
            if(change.type == "added"){
              console.log("added!!!", emails)
              if(emails.isStarred){
                console.log("it is starred" , emails)
                dispatch(fetchStarredEmails(emails))
              }

              await  dispatch(fetchEmails( emails ))
            }
            if(change.type == "modified"){
              console.log("modified!!!")
              if(emails.isStarred){
                console.log("it is here" , emails)
                dispatch(fetchStarredEmails(emails))
              } 
               await  dispatch(starMail(emails))
             await dispatch(setImportant(emails))
             
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
            <Route exact={true} path="/starred"><Starred /> </Route>
            <Route exact={true} path="/"><Inbox /> </Route>
            
          </Switch>
        </div>

        {sendMessageIsOpen &&  <SendMail />} 
      </div>)
      }
    </Router>
  );
}

export default App;
