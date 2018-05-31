import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

export class CreatePostForm extends Component {
    componentDidMount() {
        for (var key in this.refs) {
            componentHandler.upgradeElement(this.refs[key]);
        }
    }
    constructor(props) {
        super(props);
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="post-form">
                <div className="post-form__card mdl-card mdl-shadow--2dp">
                    <h3 className="post-form__title">Create Posts</h3>
                    <form onSubmit={handleSubmit} className="post-form__grid mdl-grid">
                        <div
                            className="mdl-cell mdl-cell--5-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                            ref="textTitle">
                            <div>
                                <Field
                                    name="title"
                                    className="mdl-textfield__input "
                                    component="input"
                                    type="text"
                                    pattern="[a-zA-Z0-9]+"/></div>

                            <label className="mdl-textfield__label ">Title</label>
                            <span className="mdl-textfield__error">Only alphabet and no spaces, please!</span>
                        </div>
                        <div
                            className="mdl-cell--2-offset-desktop mdl-cell mdl-cell--5-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                            ref="textCategories">
                            <div><Field name="categories" component="input" className="mdl-textfield__input "/></div>
                            <label className="mdl-textfield__label ">Categories</label>
                        </div>
                        <div
                            className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-textfield mdl-js-textfield"
                            ref="textDescription">
                            <div><Field
                                name="content"
                                component="textarea"
                                className="mdl-textfield__input"
                                type="text"
                                rows="9"/></div>
                            <label className="mdl-textfield__label">Description</label>
                        </div>
                        <button
                            type="submit"
                            className="post-form__submit mdl-js-ripple-effect mdl-js-button btn-primary"
                            ref="btnSubmit">Submit
                        </button>
                    </form>

                </div>
            </div>
        );
    }

}
function submit(props) {
    createPost(props);
}
export default reduxForm({form: 'PostsNewForm', onSubmit: submit})(CreatePostForm);