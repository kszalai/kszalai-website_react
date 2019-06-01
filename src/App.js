import React from 'react';
import Nav from './nav/nav';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <header className="App-header">
                    Hello world
                </header>
            </div>
        );
    }
}

export default App;
