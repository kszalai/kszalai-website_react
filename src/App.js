import React from 'react';
import Nav from './nav/nav';
import InfoHeader from './info-header';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <InfoHeader />
                <div class="col-sm-6 col-xs-12" id="leftCol">
                    Hello leftCol
                </div>
                <div class="col-sm-6 col-xs-12" id="rightCol">
                    Hello rightCol
                </div>
            </div>
        );
    }
}

export default App;
