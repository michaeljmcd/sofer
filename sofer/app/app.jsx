import React from 'react';
import { render } from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import { Main } from './main.jsx';

import css from 'muicss/dist/css/mui.min.css';
import css2 from 'font-awesome/css/font-awesome.css';
//import "font-awesome-webpack";

class App extends React.Component {
    render() {
        return (
            <div>
                <Appbar>
                    <div>
                        <i className="fa fa-cutlery fa-5x" aria-hidden="true"></i>
                        Sopher
                    </div>
                </Appbar>
                 <Main />
            </div>);
    }
}

module.exports.App = App;
