import Main from '../containers/Main';
import Act from '../components/Act';
import Endgame from '../components/Endgame';
import Lab from '../components/Lab';

const routes = [
  {
    hidden: true,
    name: 'Home',
    path: '/',
    icon: "home",
    component: Main
  },
  {
    name: 'Act',
    path: '/acts',
    icon: "gold",
    component: Act
  },
  {
    name: 'Endgame',
    path: '/endgame',
    icon: "heat-map",
    component: Endgame
  },
  {
    name: 'Lab',
    path: '/lab',
    icon: "branches",
    component: Lab
  },
];

export default routes;