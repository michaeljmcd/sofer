import React from 'react';
import { render } from 'react-dom';

class Workflow extends React.Component {
    render() {
        return (
            <div id="content-wrapper">
            <div className="mui--appbar-height"></div>
            <h1>New Project</h1>
        </div>
            );
    }
}

module.exports.Workflow = Workflow;
