import React from 'react';
import { render } from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';

class MenuContent extends React.Component {
    render() {
        return (
        <div>
                <div id="sidedrawer-brand" className="mui--appbar-line-height">
                  <span className="mui--text-title">Brand.io</span>
                </div>
                <div className="mui-divider"></div>
                <ul>
                  <li>
                    <strong>Category 1</strong>
                    <ul>
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                    </ul>
                  </li>
                  <li>
                    <strong>Category 2</strong>
                    <ul>
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                    </ul>
                  </li>
                  <li>
                    <strong>Category 3</strong>
                    <ul>
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                    </ul>
                  </li>
                </ul>
            </div>
        );
    }
}

class SideMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            menuExpanded: false
        };

        this.showSideDrawer = this.showSideDrawer.bind(this);
        this.hideSideDrawer = this.hideSideDrawer.bind(this);
    }

    render() {
        return (
            <div>
                {this.state.menuExpanded && 
                    <div id="mui-overlay" tabIndex="-1" onClick={this.hideSideDrawer}>
            <div id="sidedrawer" className="mui--no-user-select hide-sidedrawer active">
                        <MenuContent />
            </div>
                    </div>}
                {(!this.state.menuExpanded) && 
            <div id="sidedrawer" className="mui--no-user-select hide-sidedrawer">
                        <MenuContent />
            </div>}
                <header>
                    <Appbar>
                        <Container>
                              <a className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer" onClick={this.showSideDrawer}>☰</a>
                              <a className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer" onClick={this.hideSideDrawer}>☰</a>
                              <span className="mui--text-title mui--visible-xs-inline-block">Sofer</span>
                        </Container>
                    </Appbar>
                 </header>
             </div>
        );
    }

    showSideDrawer() {
       this.setState({
            menuExpanded: true
        });
    }

    hideSideDrawer() {
        this.setState({
            menuExpanded: false
        });
    }
}

module.exports.SideMenu = SideMenu;
