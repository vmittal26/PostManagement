import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import mdl from 'material-design-lite';
import roboto from 'typeface-roboto';
import 'material-design-lite/material.min.css';
import style from './assets/css/style.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
        <Provider store={createStoreWithMiddleWare(reducers)}>
            <Router history={browserHistory} routes = {routes} />
        </Provider>, 
        document.getElementById('app-container')
);