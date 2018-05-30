import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import mdl from 'material-design-lite';
import roboto from 'typeface-roboto';
import "material-design-icons/iconfont/material-icons.css";
// import "material-design-lite/material.min.css";
import style from './assets/base/base.scss';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
        <Provider store={createStoreWithMiddleWare(reducers)}>
        <BrowserRouter>
            <App />
         </BrowserRouter>
        </Provider>, 
        document.getElementById('app-container')
);