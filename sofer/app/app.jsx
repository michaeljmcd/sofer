import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Main } from './main/main.jsx';
import { SideMenu } from './main/side-menu.jsx';
import { Footer } from './main/footer.jsx';
import { Workflow as NewProjectWorkflow } from './new-project/workflow.jsx';

import css from 'muicss/dist/css/mui.min.css';
import css3 from './main/main.css';

const routes = [
  { path: '/',
    exact: true,
    main: () => <Main />
  },
  { path: '/new-project',
    main: () => <NewProjectWorkflow />
  }
  ];

class App extends React.Component {
    render() {
        return (
                  <HashRouter>
                      <div>
                      <SideMenu />
                        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
                <Footer />
                  </div>
                  </HashRouter>
             );
    }
}

module.exports.App = App;

