import React from 'react';
import { render } from 'react-dom';
import menuIcon from 'material-design-icons/navigation/drawable-hdpi/ic_menu_white_18dp.png';

class MenuContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="sidedrawer" className={(this.props.isExpanded ? "active" : "") + " mui--no-user-select hide-sidedrawer"}>
                <div id="sidedrawer-brand" className="mui--appbar-line-height">
                  <span className="mui--text-title">Sofer</span>
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
                        <MenuContent isExpanded={this.state.menuExpanded} />
                    </div>}
                {(!this.state.menuExpanded) && <MenuContent isExpanded={this.state.menuExpanded} />}
                <header id="header">
                    <div className="mui-appbar mui--appbar-line-height">
                        <div className="mui-container-fluid">
                            <a className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer" onClick={this.showSideDrawer}><img src={menuIcon} className="menu-icon" /></a>
                            <a className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer" onClick={this.hideSideDrawer}><img src={menuIcon}  className="menu-icon" /></a>
                            <span className="mui--text-title mui--visible-xs-inline-block mui--visible-sm-inline-block menu-icon">Sofer</span>
                        </div>
                     </div>
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
