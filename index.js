import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './app';
import './css/balls.css'
import './css/cat_ball.css'

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App />)