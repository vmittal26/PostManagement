import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router-dom';

export class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }
    componentDidMount() {
        componentHandler.upgradeAllRegistered();
    }
    constructor(props) {
        super(props);
    }

    renderPosts() {
        return this
            .props
            .posts
            .map((post) => {
                return (
                    <tr key={post.id}>
                        <td className="mdl-data-table__cell--non-numeric">{post.title}</td>
                        <td className="mdl-data-table__cell--non-numeric">{post.categories}</td>
                        <td className="mdl-data-table__cell--non-numeric">{post.content}</td>
                    </tr>
                );
            });
    }
    render() {
        return (
            <div className="post-list mdl-grid">
                <div
                    className="post-list__card mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
                    <Link to="posts/new" className="post-list__btn-add-post btn-primary">Add Post</Link>
                    <table className="post-list__post-table">
                        <thead>
                            <tr>
                                <th className="mdl-data-table__cell--non-numeric">Title</th>
                                <th className="mdl-data-table__cell--non-numeric">Categories</th>
                                <th className="mdl-data-table__cell--non-numeric">Content</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.renderPosts()}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts.all};
}
export default connect(mapStateToProps, {fetchPosts})(Posts);
