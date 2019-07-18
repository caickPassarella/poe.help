import Main from '../containers/Main';
import Act from '../components/Act';
import Endgame from '../components/Endgame';
import Lab from '../components/Lab';

const routes = [
  {
    hidden: true,
    name: 'Home',
    path: '/',
    component: Main
  },
  {
    name: 'Act',
    path: '/acts',
    component: Act
  },
  {
    name: 'Endgame',
    path: '/endgame',
    component: Endgame
  },
  {
    name: 'Lab',
    path: '/lab',
    component: Lab
  },
];

export default routes;