import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 100px;
    color: #030303;
  }

  html {
    background-color: #303D51;
    font-size: 100px;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Global/>
        <App/>
    </>
);

