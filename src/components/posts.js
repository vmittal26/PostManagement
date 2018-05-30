import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchPosts from '../actions/index';

export class Posts extends Component {

    componentWillMount() {
        this
            .props
            .fetchPosts();
    }
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
              List of  Posts
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(Posts);
