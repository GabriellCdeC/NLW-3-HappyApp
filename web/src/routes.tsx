import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Lading'
import OrphangesMap from './pages/OrphanagesMap'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/app" component={OrphangesMap} />
            </Switch>            
        </BrowserRouter>
    )
}

export default Routes