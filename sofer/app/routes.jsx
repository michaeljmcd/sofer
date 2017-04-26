import { Main } from './main/main.jsx';
import { Workflow as NewProjectWorkflow } from './new-project/workflow.jsx';

const routes = [
  { path: '/',
    exact: true,
    main: () => <Main />
  },
  { path: '/new-project',
    main: () => <NewProjectWorkflow />
  }
  ];

export default routes;
