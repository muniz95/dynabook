import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <div className="container">
        <Switch>
          <Route exact={true} path="/" component={Home} key="home" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);


export default App;
