import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Reader from './Reader';

export default class App extends Component 
{
  

  render()
  {
      return <Router>
        <Route exact path="/:bookid?" component={Reader}/>
      </Router>
  }
}

