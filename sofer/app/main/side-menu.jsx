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
            menuExpanded: false,
            //drawerClasses: ['mui--no-user-select', 'hide-sidedrawer']
        };

        this.showSideDrawer = this.showSideDrawer.bind(this);
        this.hideSideDrawer = this.hideSideDrawer.bind(this);
    }

    render() {
        return (
            <div>
                {this.state.menuExpanded && 
                    <div id="mui-overlay" tabIndex="-1">
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
    /*
        var me = this;
        var options = {
          onclose: function() {
              me.hideSideDrawer();
          }
        };
        
        mui.overlay('on', options);
        */
    
        this.setState({
            //drawerClasses: ['mui--no-user-select', 'hide-sidedrawer', 'active'],
            menuExpanded: true
        });

    }

    hideSideDrawer() {
        debugger;
      mui.overlay('off');
        this.setState({
            //drawerClasses: ['mui--no-user-select', 'hide-sidedrawer'],
            menuExpanded: false
        });
    }

/*
  showSidedrawer() {
    // show overlay
    var options = {
      onclose: function() {
        $sidedrawerEl
          .removeClass('active')
          .appendTo(document.body);
      }
    };

    var $overlayEl = $(mui.overlay('on', options));

    // show element
    $sidedrawerEl.appendTo($overlayEl);
    setTimeout(function() {
      $sidedrawerEl.addClass('active');
    }, 20);
  }


  hideSidedrawer() {
    $bodyEl.toggleClass('hide-sidedrawer');
  }
  */

  //$('.js-show-sidedrawer').on('click', showSidedrawer);
  //$('.js-hide-sidedrawer').on('click', hideSidedrawer);
}

module.exports.SideMenu = SideMenu;
