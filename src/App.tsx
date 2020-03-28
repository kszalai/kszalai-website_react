import React from 'react';
import { KsNav } from './nav/nav';
import { InfoHeader } from './info-header';
import { Footer } from './footer';
import { Home } from './home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { DatabasePrinciples } from './pages/databasePrinciples/database-principles';
import { WebProgramming } from './pages/webProgramming/web-programming';
import { NotFound } from './pages/notFound/not-found';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <KsNav />
                    <InfoHeader />
                    <br />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/471" component={DatabasePrinciples}/>
                        <Route path="/231" component={WebProgramming}/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
