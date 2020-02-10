import React from 'react';
import { Nav } from './nav/nav';
import { InfoHeader } from './info-header';
import { Footer } from './footer';
import { Home } from './home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { DatabasePrinciples } from './nav/pages/databasePrinciples/database-principles';
import { WebProgramming } from './nav/pages/webProgramming/web-programming';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <InfoHeader />
                    <br />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/471">
                            <DatabasePrinciples />
                        </Route>
                        <Route path="/231">
                            <WebProgramming />
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
