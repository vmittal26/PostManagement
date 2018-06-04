import React, {Component} from 'react';
import CreatePostForm from './createpost_form';
import {createPost} from '../actions/index';
import { withRouter } from 'react-router-dom';

export class PostNew extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(values) {
        console.log('Submitting Values');
        let promise = createPost(values).promise;
        promise
        .then(()=>this.props.history.push('/'))
        .catch((error)=>console.log('error while submitting form'));
    }
    render() {
        return (
            <div>
                <CreatePostForm onSubmit={this.submit} />
            </div>
        );
    }
}

export default withRouter(PostNew);
