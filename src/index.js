import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Body from "./body.js";
import Nav from "./nav.js"; 
import Sale from "./sale.js";
import Bot from "./bot.js";
ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Body />
    <Sale />
    <Bot/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
