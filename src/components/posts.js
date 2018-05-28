import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchPosts from '../actions/index';

class Posts extends Component {

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
            <div
                className="demo-card-wide demo-card-square mdl-card mdl-shadow--2dp post-form">
                <h3 className="post-form__title">Create Posts</h3>
                <form className="post-form__form">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input " type="text" id="sample1"></input>
                        <label className="mdl-textfield__label ">Title</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input " type="text" id="sample1"></input>
                        <label className="mdl-textfield__label ">Categories</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                        <textarea className="mdl-textfield__input" type="text" rows="9"></textarea>
                        <label className="mdl-textfield__label">Description</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(Posts);
