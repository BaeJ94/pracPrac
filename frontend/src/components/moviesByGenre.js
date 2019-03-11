import React, { Component } from 'react';
import {Switch, Link, Redirect, Route} from 'react-router-dom';

class Genre extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                
                <h1>
                    Movies By Genre
                </h1>
            </div>
        )
    }
}

export default Genre;