import React, { Component } from 'react';
import {Switch, Link, Redirect, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import AllMovies from './components/allMovies'
import Genre from './components/moviesByGenre';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/movies" component={AllMovies}/>
          <Route path="/movies/byGenre" component={Genre} />
        </Switch>
      </div>
    );
  }
}

export default App;
