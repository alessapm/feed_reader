import React, { Component } from 'react';

import Favorite from '../Favorite/Favorite';

export default class Favorites extends Component {
  constructor(props){
    super(props)
  }

  removeFavorite(fav){
    this.props.removeFav(fav)
  }

  render(){
    const favorites = this.props.favorites.map((favorite) => {
      return(
        <Favorite
          key={favorite.title}
          title={favorite.title}
          author={favorite.author}
          image={favorite.image}
          thumbnail={favorite.thumbnail}
          ups={favorite.ups}
          removeFavorite={this.removeFavorite.bind(this)}
        />
      )
    });

    if (favorites.length > 0){
      return (
        <div className="posts-wrapper">
          {favorites}
        </div>
      )
    } else {
      return(
        <div className="posts-wrapper">
          <div className="single-post none">
            <h1 className="title">No favorites yet!</h1>
          </div>
        </div>
      )
    }
  }
}
