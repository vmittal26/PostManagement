import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainApp from './components/main_app';

import App from './components/App';
import PostNew from './components/post_new';

export default(
        <Route path="/" component={App}>
           <IndexRoute component={MainApp}/>
           <Route path="/new" component={PostNew} />
        </Route>
);