import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchPosts from '../actions/index';
import { Link } from 'react-router-dom';

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
            <div className ="post-list mdl-grid">
              <div className="post-list__card mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
              <Link to="posts/new" className="post-list__btn-add-post btn-primary">Add Post</Link>
              </div>
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(Posts);
