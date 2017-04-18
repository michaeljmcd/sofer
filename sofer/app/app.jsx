import React from 'react';
import { render } from 'react-dom';

import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';

import { Main } from './main/main.jsx';
import { SideMenu } from './main/side-menu.jsx';
import { Footer } from './main/footer.jsx';

import css from 'muicss/dist/css/mui.min.css';
import css2 from 'font-awesome/css/font-awesome.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <SideMenu />
                <header>
                    <Appbar>
                        <Container>
                              <a className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
                              <a className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a>
                              <span className="mui--text-title mui--visible-xs-inline-block">Sofer</span>
                        </Container>
                    </Appbar>
                 </header>
                 <Main />
                 <Footer />
             </div>);
    }
}

module.exports.App = App;

