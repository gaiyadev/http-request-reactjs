import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
import post from '../../components/Post/Post';
import Posts from '../Post/Post';

class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // posts: [],
            selectedPostId: null,
            Error: false

        }
    }


    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li> <a href="/" >Home</a> </li>
                            <li> <a href="/new-post">About</a> </li>
                        </ul>
                    </nav>
                </header>
                <Posts />
                <FullPost />
            </div>
        );
    }
}

export default Blog;