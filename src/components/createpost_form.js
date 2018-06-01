import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import TextField from './textfield';
import TextArea from './textarea';

export class CreatePostForm extends Component {

    componentDidMount() {
        componentHandler.upgradeAllRegistered();
    }
    constructor(props) {
        super(props);
    }

    render() {
        const {handleSubmit, submitting} = this.props;
        return (
            <div className="post-form">
                <div className="post-form__card mdl-card mdl-shadow--2dp">
                    <h3 className="post-form__title">Create Posts</h3>
                    <form onSubmit={handleSubmit} className="post-form__grid mdl-grid">
                        <div className ="mdl-cell mdl-cell--5-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
                            <Field name="title" label="Title" component={TextField}/>
                        </div>
                        <div className ="mdl-cell--2-offset-desktop mdl-cell mdl-cell--5-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
                            <Field name="categories" label="Categories" component={TextField}/>
                        </div>
                        <div className ="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
                            <Field name="content" label = "Content" component={TextArea}/>
                        </div>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="post-form__submit mdl-js-ripple-effect mdl-js-button btn-primary"
                            ref="btnSubmit">Submit
                        </button>
                    </form>

                </div>
            </div>
        );
    }

}

const onSubmit = (props) => {
    // alert(JSON.stringify(props));
    createPost(props);
}

const validate = (values) => {
    const errors = {}
    if (!values.title) errors.title = 'Required';
    if (!values.categories)  errors.categories = 'Required';
    if (!values.content)   errors.content = 'Required';
    return errors
}
const renderField = ({input,meta,label})=>{
    <div>
        <input {...input}/>
        <label className="mdl-textfield__label ">{label}</label>
        {meta.error && meta.touched}<span>{meta.error}</span>
    </div>
}
export default reduxForm(
           {form: 'PostsNewForm', 
            onSubmit, 
            validate
})(CreatePostForm);