import React, { Component } from 'react';
import {Switch, Link, Redirect, Route} from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h1>
                    Welcome to MovieApp
                </h1>
            </div>
        )
    }
}

export default Home;