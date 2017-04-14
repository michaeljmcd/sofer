import React from 'react';
import { render } from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';

class Main extends React.Component {
  render () {
      return <div class="mui--text-display3">
                  <p> Hello React!</p>
              </div>;
  }
}

module.exports.Main = Main;
