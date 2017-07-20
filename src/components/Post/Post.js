import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props){
    super(props);

    this.state = {
      image: "",
      title: "",
      author: "",
      ups: "",
      thumbnail: "",
      isFavorited: false,
      count: 0
    }
  }

  componentDidMount(){
    this.setState({image: this.props.image});
    this.setState({title: this.props.title});
    this.setState({author: this.props.author});
    this.setState({ups: this.props.ups})
    this.setState({thumbnail: this.props.thumbnail})
  }


  favStatus(){
    this.state.count%2 === 0 ? this.addFavorite() : this.removeFavorite();
  }

  addFavorite() {
    this.props.addFavorite(this.state);
    this.setState({isFavorited: true})
    this.setState({count: this.state.count + 1})
  }

  removeFavorite(){
    console.log('in removeFavorite in Post')
    this.props.removeFavorite(this.state)
    this.setState({isFavorited: false})
    this.setState({count: this.state.count + 1})
  }

  render(){

    if (this.props.image.endsWith("jpg") && this.state.isFavorited){
      return(
        <div className="single-post">
          <div className="image-and-fav">
            <button className="selected" onClick={this.favStatus.bind(this)}><i className="fa fa-heart" aria-hidden="true"></i></button>
            <div>
              <img src={this.props.image}/>
            </div>
          </div>
          <h1 className="title">{this.props.title}</h1>
          <div className="details">
            <p className="author"><i className="fa fa-user-o" aria-hidden="true"></i> /u/{this.props.author}</p>
            <p><i className="fa fa-bolt" aria-hidden="true"></i> {this.props.ups}</p>
          </div>
        </div>
      )
    } else if (this.props.image.endsWith("jpg")){
      return(
        <div className="single-post">
          <div className="image-and-fav">
            <button className="select-fav" onClick={this.favStatus.bind(this)}><i className="fa fa-heart-o" aria-hidden="true"></i></button>
            <div>
              <img src={this.props.image}/>
            </div>
          </div>
          <h1 className="title">{this.props.title}</h1>
          <div className="details">
            <p className="author"><i className="fa fa-user-o" aria-hidden="true"></i> /u/{this.props.author}</p>
            <p><i className="fa fa-bolt" aria-hidden="true"></i> {this.props.ups}</p>
          </div>
        </div>
      )
    } else if (this.state.isFavorited) {
      return(
        <div className="single-post">
          <div className="image-and-fav">
            <button className="selected" onClick={this.favStatus.bind(this)}><i className="fa fa-heart" aria-hidden="true"></i></button>
            <div>
              <img src={this.props.thumbnail}/>
            </div>
          </div>
          <h1 className="title">{this.props.title}</h1>
          <div className="details">
            <p className="author"><i className="fa fa-user-o" aria-hidden="true"></i> /u/{this.props.author}</p>
            <p><i className="fa fa-bolt" aria-hidden="true"></i> {this.props.ups}</p>
          </div>
        </div>
      )
    } else {
      return(
        <div className="single-post">
          <div className="image-and-fav">
            <button className="select-fav" onClick={this.favStatus.bind(this)}><i className="fa fa-heart-o" aria-hidden="true"></i></button>
            <div>
              <img src={this.props.thumbnail}/>
            </div>
          </div>
          <h1 className="title">{this.props.title}</h1>
          <div className="details">
            <p className="author"><i className="fa fa-user-o" aria-hidden="true"></i> /u/{this.props.author}</p>
            <p><i className="fa fa-bolt" aria-hidden="true"></i> {this.props.ups}</p>
          </div>
        </div>
      )
    }

  }
}
