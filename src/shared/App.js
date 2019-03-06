import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, List, Write, Detail } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/list" component={List}/>
                <Route path="/write/:idx" component={Write}/>
                <Route path="/detail/:idx" component={Detail}/>
            </div>
        );
    }
}

export default App;