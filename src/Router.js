import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from './components/Register.js';
import Principal from './components/Principal.js';
import SigIn from './components/SigIn.js';
const Routes = () => {
    return(
        <Switch>
            <Route exact path= '/' component={Register} />
            <Route path= '/principal' component={Principal}/>
            <Route path="/sigIn" component={SigIn}/>
        </Switch>
    )
}
export default Routes