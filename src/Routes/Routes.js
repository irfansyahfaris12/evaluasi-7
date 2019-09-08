import React from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../container/Home';
import Login from "../container/Login";

function Routes() {
    return(
        <Router>
            <Route exact path = "/" component={Login} />
            <Route path = "/home" component={Home} />
            
        </Router>
    )
}

export default Routes;