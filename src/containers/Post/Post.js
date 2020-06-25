import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import '../Post/Posts.css'
import axios from '../../axios';
import { Link } from 'react-router-dom';

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],

        }
    }

    componentDidMount() {
        console.log(this.props);

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
                return <Link to={'/' + post.id} key={post.id} >
                    <Post

                        title={post.title}
                        author={post.author}
                        body={post.body}
                        clicked={() => this.selectedPostHandler(post.id)} /></Link>
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