import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainApp from './components/main_app';

import App from './components/App';

export default(
        <Route path="/" component={App}>
           <IndexRoute component={MainApp}/>  
        </Route>
);