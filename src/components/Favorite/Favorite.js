import React, { Component } from 'react';

export default class Favorite extends Component {
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
    this.setState({ups: this.props.ups});
    this.setState({thumbnail: this.props.thumbnail});

  }

  removeFavorite(){
    this.props.removeFavorite(this.state)
  }

   render(){

    if (this.props.image.endsWith("jpg")) {
      return(
        <div className="single-post">
          <div className="image-and-fav">
            <button className="select-fav" onClick={this.removeFavorite.bind(this)}><i className="fa fa-trash" aria-hidden="true"></i></button>
            <div>
              <img src={this.props.image}/>
            </div>
          </div>
          <h1 className="title">{this.props.title}></h1>
          <div className="details">
            <p className="author"><i className="fa fa-user-o" aria-hidden="true"></i> {this.props.author}</p>
            <p><i className="fa fa-bolt" aria-hidden="true"></i> {this.props.ups}</p>
          </div>
        </div>
      )
    } else {
      return(
        <div className="single-post">
          <div className="image-and-fav">
            <button className="select-fav" onClick={this.removeFavorite.bind(this)}><i className="fa fa-trash" aria-hidden="true"></i></button>
            <div>
              <img src={this.props.thumbnail}/>
            </div>
          </div>
          <h1 className="title">{this.props.title}></h1>
          <div className="details">
            <p className="author"> <i className="fa fa-user-o" aria-hidden="true"></i> {this.props.author}</p>
            <p><i className="fa fa-bolt" aria-hidden="true"></i> {this.props.ups}</p>
          </div>
        </div>
      )
    }

  }
}
