import React, { Component } from 'react';

import Post from '../Post/Post';

export default class Posts extends Component {
  constructor(props){
    super(props);

    this.state = {
      favorites: []
    }
  }

  componentDidMount(){
    this.setState({favorites: this.props.favorites})
    console.log('in Posts, this.state.favorites: ', this.state.favorites)
  }

  addFavorite(fav){
    console.log('in addFavorite in PostSSS, fav: ', fav);
    // console.log('****this', this)

    // this.props.addFav(fav)
    this.setState({favorites: fav});
    this.props.addFav(fav)
  }

  removeFavorite(fav){
    this.props.removeFav(fav)
  }


  render() {
    const posts = this.props.posts
    const post = posts.map((post) => {
      return(
        <Post
          key={post.data.id}
          title={post.data.title}
          author={post.data.author}
          image={post.data.url}
          thumbnail={post.data.thumbnail}
          ups={post.data.ups}
          addFavorite={this.addFavorite.bind(this)}
          removeFavorite={this.removeFavorite.bind(this)}
        />
      )
    });

    if (this.props.posts.length > 0){
      return (
        <div className="posts-wrapper">
          {post}
        </div>
      )
    } else {
      return (
        <div className="posts-wrapper">
          <div className="single-post none">
            <h1 className="title">I can't find that subreddit, please try another search.<br />I recommend 'pics' or 'marvel'</h1>
          </div>
        </div>
      )
    }
  }
}
