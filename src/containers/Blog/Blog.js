import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';
import post from '../../components/Post/Post';

class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            selectedPostId: null
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const posts = response.data.slice(4, 8);
            const updatedPost = posts.map(post => {
                return {
                    ...post,
                    author: 'Obed G'
                }
            });
            this.setState({ posts: updatedPost });
            //console.log(response);
        }).catch(err => console.log(err));
    }

    selectedPostHandler = (id) => {
        this.setState({ selectedPostId: id })
    }
    render() {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} body={post.body}
                clicked={() => this.selectedPostHandler(post.id)} />
        });
        return (
            <div>
                <section className="Posts">
                    {posts}

                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;