import React, { Component } from 'react';
import Axios from 'axios';

import Posts from '../Posts/Posts';
import Favorites from '../Favorites/Favorites';




export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      favorites: [],
      onMain: true,
      onFav: false,
      subreddit: "analog"
    }
  }

  componentDidMount(){
    this.searchReddit()
  }

  searchReddit(){
    console.log('inside componentDidMount')
    Axios.get(`https://www.reddit.com/r/${this.state.subreddit}/top/.json`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data) => {
      console.log('data.data.data.children: ', data.data.data.children);

      this.setState({posts: data.data.data.children})
    })
    .catch((err) => {
      console.log('error: ', err);
      alert('I can\'t find that subreddit. please try another search')
    })
  }

  handleChange(event){
    this.setState({
      subreddit: event.target.value
    })
  }

  pageOnMain(){
    this.setState({onFav: false});
    this.setState({onMain: true});
  }

  pageOnFav(){
    this.setState({onMain: false});
    this.setState({onFav: true});
  }

  addFav(fav){
    const currentFavorites = this.state.favorites;
    const newFavorites = currentFavorites.push(fav);
    this.setState({favorites: currentFavorites});
  }

  removeFav(fav){
    const currentFavorites = this.state.favorites;
    const newArr = [];

    currentFavorites.forEach((item) => {
      console.log('item: ', item)
      newArr.push(item.title)
    })

    const mySearch = fav.title
    const index = newArr.indexOf(mySearch)
    if (index >= 0){
      currentFavorites.splice(index, 1)
    }
      this.setState({favorites: currentFavorites});
    }


  render() {
    if (this.state.onMain){
      return(
        <div className = "container">
          <nav>
            <button className="highlighted" onClick={this.pageOnMain.bind(this)}><i className="fa fa-reddit-alien" aria-hidden="true"></i> /r/{this.state.subreddit}</button>
            <button className="lowlighted" onClick={this.pageOnFav.bind(this)}><i className="fa fa-heart" aria-hidden="true"></i> favorites ({this.state.favorites.length})</button>
          </nav>
          <div className="search-area">
            <label>search a new subreddit: </label><br />
            <input name="subreddit"
              type="text"
              onChange={this.handleChange.bind(this)}
              placeholder="suggestions: 'pics' or 'marvel'"
            /><br />
            <button
              type="submit"
              className="find-subreddit"
              onClick={this.searchReddit.bind(this)}>
              Search
            </button>
        </div>
          <Posts
            posts={this.state.posts}
            favorites={this.state.favorites}
            addFav={this.addFav.bind(this)}
            removeFav={this.removeFav.bind(this)}
          />
        </div>
      )
    }
    if (this.state.onFav){
      return(
        <div className = "container">

         <nav>
            <button  className="lowlighted" onClick={this.pageOnMain.bind(this)}><i className="fa fa-reddit-alien" aria-hidden="true"></i> /r/analog</button>
            <button className="highlighted" onClick={this.pageOnFav.bind(this)}><i className="fa fa-heart" aria-hidden="true"></i> favorites ({this.state.favorites.length})</button>
          </nav>
          <Favorites
            favorites={this.state.favorites}
            removeFav={this.removeFav.bind(this)}
          />
        </div>
      )
    }
  }

}
