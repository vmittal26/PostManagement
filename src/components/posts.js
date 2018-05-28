import React, {Component} from 'react';
import { connect } from 'react-redux';
import fetchPosts from '../actions/index';

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="mdl-spinner mdl-js-spinner is-active"></div>
        );
    }
}

export default connect(null,{fetchPosts})(Posts);
