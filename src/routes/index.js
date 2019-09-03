import Main from '../containers/Main';
import Act from '../components/Act';
import Endgame from '../components/Endgame';
import Lab from '../components/Lab';
import Results from '../components/Result';

const routes = [
  {
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
  {
    hidden: true,
    name: 'Result',
    path: '/result/:item',
    icon: "gold",
    component: Results
  },
];

export default routes;