import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props){
    super(props);

    this.state = {
      image: "",
      title: "",
      author: "",
      ups: "",
      thumbnail: ""
    }
  }

  componentDidMount(){
    this.setState({image: this.props.image});
    this.setState({title: this.props.title});
    this.setState({author: this.props.author});
    this.setState({ups: this.props.ups})
    this.setState({thumbnail: this.props.thumbnail})
  }

  addFavorite() {
    console.log('in addFavorite in Post');
    console.log('this.state: ', this.state)
    this.props.addFavorite(this.state)
  }

  removeFavorite(){
    console.log('in removeFavorite in Post')
    this.props.removeFavorite(this.state)
  }

  render(){
    if (!this.props.image) {
      return (
        <h1>No favorites yet</h1>
      )
    }
    if (this.props.image.endsWith("jpg")) {
      return(
        <div className="single-post">
          <button onClick={this.addFavorite.bind(this)}>Fav</button>
          <img src={this.props.image}/>
          <h1 className="title">{this.props.title}></h1>
          <div className="details">
            <p>{this.props.author}</p>
            <p>ups: {this.props.ups}</p>
          </div>
        </div>
      )
    } else {
      return(
        <div className="single-post">
          <button onClick={this.addFavorite.bind(this)}>Fav</button>
          <img src={this.props.thumbnail}/>
          <h1>{this.props.title}></h1>
          <p>{this.props.author} | ups: {this.props.ups}</p>
        </div>
      )
    }

  }
}
