import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList/EmailList';
import Header from './components/Header/Header';
import Mail from './components/Mail/Mail';
import SendMail from './components/SendMail/SendMail';
import Sidebar from './components/Sidebar/Sidebar';
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from './features/mailSlice'


function App() {
  const  sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
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
