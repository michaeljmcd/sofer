import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import { Main } from './main/main.jsx';
import { SideMenu } from './main/side-menu.jsx';
import { Footer } from './main/footer.jsx';

import css from 'muicss/dist/css/mui.min.css';
import css3 from './main/main.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <SideMenu />
                <Main />
                  <HashRouter>
                      <Route path='/' component={Main} />
                  </HashRouter>
                <Footer />
             </div>);
    }
}

module.exports.App = App;

