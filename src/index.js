import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import usersReducer from './store/reducers/usersReducer';
import userReducer from './store/reducers/userReducer';


//import axios from 'axios';


//axios.defaults.baseURL = "https://api.github.com";

const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer , composeEnhancers(applyMiddleware(thunk)))

let app = (
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

