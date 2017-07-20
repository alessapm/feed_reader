import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

import "./styles/style.css"

import Main from './components/Main/Main';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';
import Favorites from './components/Favorites/Favorites';
import Favorite from './components/Favorite/Favorite';



ReactDom.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main} />
    <Route path='/favorites' component={Favorites} />

  </Router>,
  document.getElementById('app'));
