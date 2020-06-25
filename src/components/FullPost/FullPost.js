import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loadedPost: null,
        }
    }
    componentDidUpdate() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                if (this.props.id) {
                    axios.get('/posts/' + this.props.match.params.id).then(response => {
                        this.setState({ loadedPost: response.data });
                        console.log(response);

                    }).catch(err => {
                        console.log(err);
                    });

                }
            }
        }

    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ color: 'red' }} > Loading</p>
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;