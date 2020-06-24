import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import '../Post/Posts.css'
import axios from '../../axios';

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],

        }
    }

    componentDidMount() {
        axios.get('/posts').then(response => {
            const posts = response.data.slice(4, 8);
            const updatedPost = posts.map(post => {
                return {
                    ...post,
                    author: 'Obed G'
                }
            });
            this.setState({ posts: updatedPost });
        }).catch(err => {
            //           this.setState({ error: true })
            console.log(err);
        });
    }


    selectedPostHandler = (id) => {
        this.setState({ selectedPostId: id })
    }


    render() {

        let posts = <p style={{ color: "red" }} >Something went wrong</p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    body={post.body}
                    clicked={() => this.selectedPostHandler(post.id)} />
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>

        );
    }
}

export default Posts;