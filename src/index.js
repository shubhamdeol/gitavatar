import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';

axios.defaults.baseURL = "https://api.github.com";

let app = (
        <BrowserRouter>
            <App />
        </BrowserRouter>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
