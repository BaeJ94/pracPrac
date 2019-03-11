import React, { Component } from 'react';
import {Switch, Link, Redirect, Route} from 'react-router-dom';

class AllMovies extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h1>
                    All Movies
                </h1>
            </div>
        )
    }
}

export default AllMovies;