import React, {Component} from 'react'
const API_KEY = 'AIzaSyDBNYSsDDSrQMVvk-a-nZeVUgQemWUXnRM';
import {Switch, Route} from 'react-router-dom';
import Header from './header';
import Drawer from './drawer';
import MainApp from './main_app';
import PostNew from './post_new';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    render() {
        return (
            <div
                className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">
                <Header/>
                <Drawer/>
                <main className="mdl-layout__content">
                <Switch>
                    <Route exact path='/' component={MainApp}/>
                    <Route path='/posts/new' component={PostNew}/>
                </Switch>
                </main>
            </div>
        );
    }

}

export default App;