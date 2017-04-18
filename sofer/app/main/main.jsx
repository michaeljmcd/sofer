import React from 'react';
import { render } from 'react-dom';

class Main extends React.Component {
  render () {
      return (<div className="mui--text-display3">
                  <p>Hello React!</p>
              </div>);
  }
}

module.exports.Main = Main;
