import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Users from './components/Users';
import UserCreator from './components/UserCreator';
import UserDisplay from './components/UserDisplay';
import UserDisplay from './components/UserDisplay';
import GameDisplay from './components/GameDisplay';
import GameGenerator from './components/GameGenerator';

import './stylesheets/styles.css';


const App= props => {
    return (
        <div className="router">
            <main> 
                <Switch> 
                    <Route 
                    exact
                    path="/"
                    component={Users}
                    />
                    <Route 
                    exact
                    path="/createUser"
                    component={CreateUser}
                    />
                </Switch>
            </main>
        </div>
    );
}

export default App;