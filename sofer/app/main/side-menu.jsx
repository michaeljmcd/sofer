import React from 'react';
import { render } from 'react-dom';

class SideMenu extends React.Component {
    render() {
        return (
            <div id="sidedrawer" className="mui--no-user-select hide-sidedrawer">
                Your menu options are here!
            </div>
        );
    }
}

module.exports.SideMenu = SideMenu;
