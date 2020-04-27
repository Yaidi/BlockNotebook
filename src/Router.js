import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from './components/Register.js';
import Principal from './components/Principal.js';
import SigIn from './components/SigIn.js';
import Note from './components/Note.js';
const Routes = () => {
    return(
        <Switch>
            <Route exact path= '/' component={Register} />
            <Route  path= '/Register' component={Register}/>
            <Route path= '/Principal' component={Principal}/>
            <Route path="/sigIn" component={SigIn}/>
            <Route path='/Note' component={Note}/>
        </Switch>
    )
}
export default Routes