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
      onFav: false
    }
  }

  componentDidMount(){
    console.log('inside componentDidMount')
    Axios.get('https://www.reddit.com/r/analog/top/.json', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data) => {
      console.log('data.data.data.children: ', data.data.data.children);

      this.setState({posts: data.data.data.children})
    })
    .catch((err) => { console.log('error: ', err)})
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
    console.log('****fav: ', fav);
    const currentFavorites = this.state.favorites;
    console.log('current: ', currentFavorites)
    const newFavorites = currentFavorites.push(fav);

    this.setState({favorites: currentFavorites});
  }

  removeFav(fav){
    const currentFavorites = this.state.favorites;
    console.log('currentFavorites: ', currentFavorites)
    console.log('fav: ', fav)
    const index = currentFavorites.indexOf(fav);
    console.log('index: ', index)
    const newFavorites = currentFavorites.splice(index, 1);

    this.setState({favorites: currentFavorites});
  }


  render() {
    if (this.state.onMain){
      return(
        <div className = "container">
          <h1>Main</h1>
          <button onClick={this.pageOnMain.bind(this)}>Home</button>
          <button onClick={this.pageOnFav.bind(this)}>Favorites</button>
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
          <h1>Favorites</h1>
          <button onClick={this.pageOnMain.bind(this)}>Home</button>
          <button onClick={this.pageOnFav.bind(this)}>Favorites</button>
          <Favorites
            favorites={this.state.favorites}
            removeFav={this.removeFav.bind(this)}
          />
        </div>
      )
    }
  }

}
