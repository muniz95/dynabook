import { h, Component } from 'preact';
import Router from 'preact-router'
import Header from './components/Header'
import Home from './views/Home'
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Router>
          <Home path='/' />
        </Router>
      </div>
    </div>
  );
  }
}

export default App;
