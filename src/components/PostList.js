import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                {this.props.posts.map(post=>{
                    return (
                        <p key={post.id}>{post.title}</p>
                    );
                })}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        posts:state.posts
    };
};

export default connect(mapStateToProps, {
    fetchPosts
})(PostList);
