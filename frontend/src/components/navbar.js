import React, { Component } from 'react';
import {Switch, Link, Redirect, Route} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <div>
                <Link to="/"> Home </Link>
                <Link to="/movies"> All Movies </Link>
                <Link to="/movies/byGenre"> By Genre </Link>
            </div>
        )
    }
}

export default Navbar;