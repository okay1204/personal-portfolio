import './App.css'
import 'animate.css/animate.min.css'
import routes from './routes'

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NotFound from './pages/notFound.js'

class App extends React.Component {

    render() {
        return (
            <Router>
                <div id='App'>
                    <Switch>
                        {routes.map(route => (
                            <Route
                                path={route.path}
                                exact
                                component={props => (
                                    <route.component {...props}/>
                                )}
                            />
                        ))}

                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
