import React, { Component } from 'react';

import Favorite from '../Favorite/Favorite';

export default class Favorites extends Component {
  constructor(props){
    super(props)
  }

  removeFavorite(fav){

  }

  render(){
    const favorites = this.props.favorites.map((favorite) => {
      return(
        <Favorite
          key={favorite.title}
          title={favorite.title}
          author={favorite.author}
          image={favorite.image}
          ups={favorite.ups}
          removeFavorite={this.removeFavorite.bind(this)}
        />
      )
    });

    return (
      <div className="favorites-container">
        {favorites}
      </div>
    )
  }
}
