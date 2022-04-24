import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList/EmailList';
import Header from './components/Header/Header';
import Mail from './components/Mail/Mail';
import SendMail from './components/SendMail/SendMail';
import Sidebar from './components/Sidebar/Sidebar';
import { useDispatch, useSelector } from "react-redux";
import { fetchEmails, selectSendMessageIsOpen } from './features/mailSlice'

import { collection, query, where, onSnapshot } from "firebase/firestore"
import { db } from './firebase/firebase';

function App() {
  const  sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const dispatch = useDispatch()

  useEffect(() => {
    let unsubscribe
    (async() => {
      try {
        const q = await query(collection(db, "emails"));
        unsubscribe = onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
          dispatch(fetchEmails( change.doc.data()))
    });






  });
  
      } catch (error) {
        console.log({error})
      }
  
    })()

    return ()=> unsubscribe()

  }, [])
  

  return (
    <Router>
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
      </div>
    </Router>
  );
}

export default App;
