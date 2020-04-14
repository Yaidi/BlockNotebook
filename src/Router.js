import React from 'react';
import {Switch, Route} from 'react-router-dom';
import register from './components/register.js';
import principal from './components/principal.js';
const Routes = () => {
    return(
        <Switch>
            <Route exact path= '/' component={register} />
            <Route path= '/principal' component={principal}/>
        </Switch>
    )
}
export default Routes