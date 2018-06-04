import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
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
                <div className="post-form__card">
                    <h3 className="post-form__title">Create Posts</h3>
                    <form onSubmit={handleSubmit} className="post-form__grid">
                        <div
                            className="mdl-cell mdl-cell--5-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
                            <Field
                                className="post-form__textfield"
                                name="title"
                                label="Title"
                                component={TextField}/>
                        </div>
                        <div
                            className=" mdl-cell mdl-cell--2-offset-desktop mdl-cell--5-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
                            <Field
                                className="post-form__textfield"
                                name="categories"
                                label="Categories"
                                component={TextField}/>
                        </div>
                        <div
                            className="mdl-cell mdl-cell--5-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
                            <Field
                                className="post-form__textarea"
                                name="content"
                                label="Content"
                                custom={"custom"}
                                component={TextArea}/>
                        </div>
                        <div
                            className="mdl-cell mdl-cell--7-col mdl-cell--4-col-phone mdl-cell--8-col-tablet"></div>
                        <div className ="post-form__button-group">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="post-form__submit mdl-js-ripple-effect mdl-js-button"
                                ref="btnSubmit">Submit
                            </button>
                            <Link to="/"
                                className="post-form__cancel mdl-js-ripple-effect mdl-js-button"
                                ref="btnSubmit">Cancel
                            </Link>
                        </div>

                    </form>

                </div>
            </div>
        );
    }

}

const validate = (values) => {
    const errors = {}
    if (!values.title) 
        errors.title = 'Enter Title';
    if (!values.categories) 
        errors.categories = 'Enter Categories';
    if (!values.content) 
        errors.content = 'Enter Content';
    return errors
}

export default reduxForm({form: 'PostsNewForm', validate})(CreatePostForm);