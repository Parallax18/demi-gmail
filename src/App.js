import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList/EmailList';
import Header from './components/Header/Header';
import Mail from './components/Mail/Mail';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
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
      </div>
    </Router>
  );
}

export default App;
