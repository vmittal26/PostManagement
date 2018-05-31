import React, {Component} from 'react';
import CreatePostForm from './createpost_form';
// import {createPost} from '../actions/index';
// import {connect} from 'react-redux';

export default class PostNew extends Component {
    constructor(props) {
        super(props);
    }
    submit(values) {
     this.createPost(values);
    }
    render() {
        return (
            <div>
                <CreatePostForm />
            </div>
        );
    }
}

// export default connect(null, {createPost})(PostNew);
