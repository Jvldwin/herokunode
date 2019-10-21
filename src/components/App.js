import React from 'react'
import { Route, Switch} from 'react-router'
import routes from '../routes'
import Home from './Home';

export default () => ( 
    <Switch>
        {routes.map((route, idx) => (<Route key={idx} exact {...route}/>))}
    </Switch>
)