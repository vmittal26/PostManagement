import React, {Component} from 'react';
import CreatePostForm from './createpost_form';
import {createPost} from '../actions/index';
import {withRouter} from 'react-router-dom';

export class PostNew extends Component {

    // Below way of method definition would have to be bind to current context, arrow
    // function does not have that problem
    /* submit(values) {     console.log('Submitting Values');     let promise =
       createPost(values).promise;     promise
       .then(()=>this.props.history.push('/')) .catch((error)=>console.log('error
    while submitting form')); }*/

    submit = (values) => {
        console.log('Submitting Values');
        let promise = createPost(values).promise;
        promise.then(() => this.props.history.push('/')).catch((error) => console.log('error while submitting form'));
    }
    render() {
        return (
            <div>
                <CreatePostForm onSubmit={this.submit}/>
            </div>
        );
    }
}

export default withRouter(PostNew);
