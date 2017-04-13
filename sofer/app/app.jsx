import React from 'react';
import { render } from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import { Main } from './main.jsx';

class App extends React.Component {
    render() {
        return <div>
                <Appbar />
                <Main />
            </div>
    }
}

module.exports.App = App;
