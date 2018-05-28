import React, {Component} from 'react'
const API_KEY = 'AIzaSyDBNYSsDDSrQMVvk-a-nZeVUgQemWUXnRM';

import Header from './header';
import Drawer from './drawer';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header/>
                <Drawer/>
                     {this.props.children}
            </div>
        );
    }

}

export default App;