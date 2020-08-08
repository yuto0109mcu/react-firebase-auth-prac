import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import LoggedInRoute from './LoggedInRoute'

import { AuthProvider } from './AuthService'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'

// http://localhost:3000/

// http://codevillage.jp/about

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <LoggedInRoute exact path="/" component={Room} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App