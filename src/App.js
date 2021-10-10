import './App.css'
import 'animate.css/animate.min.css'

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home.js'
class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        path=''
                        exact
                        component={Home}
                    >

                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App
