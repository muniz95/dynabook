import { h, render } from 'preact';
import App from './App';
import { Provider } from "preact-redux";
import store from "./store";
import './index.css';
import 'bulma/css/bulma.css';

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
