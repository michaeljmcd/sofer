import React from 'react';
import { render } from 'react-dom';

import { Main } from './main/main.jsx';
import { SideMenu } from './main/side-menu.jsx';
import { Footer } from './main/footer.jsx';

import css from 'muicss/dist/css/mui.min.css';
import css2 from 'font-awesome/css/font-awesome.css';
import css3 from './main/main.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <SideMenu />
                <Main />
                <Footer />
             </div>);
    }
}

module.exports.App = App;

