import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Reader from './Reader';
import BookList from './BookList';

export default class App extends Component 
{
  

  render()
  {
      return <Router>
        <div>
          <Route exact path="/:bookurl" component={Reader}/>
          <Route exact path="/" component={BookList}/>
        </div>
      </Router>
  }
}



