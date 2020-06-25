import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
import post from '../../components/Post/Post';
import Posts from '../Post/Post';
import { Route, NavLink } from 'react-router-dom';

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
                            <li> <NavLink to="/" activeClassName="active"
                                activeStyle={{ color: 'red' }} >  Home</NavLink> </li>

                            <li> <NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit',
                            }

                            }  >New Post</NavLink> </li>
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" component={FullPost} />
                {/* <Posts />
                <FullPost /> */}
            </div >
        );
    }
}

export default Blog;