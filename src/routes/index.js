import Main from '../containers/Main';
import { Act, Endgame, Lab, Result, Register, Login, Controller, Services } from '../components';

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
    component: Result
  },
  {
    hidden: true,
    name: 'Register',
    path: '/register',
    icon: "user",
    component: Register
  },
  {
    hidden: true,
    name: 'Controller',
    path: '/controller',
    component: Controller
  },
  {
    hidden: true,
    name: 'Services',
    path: '/services',
    component: Services
  },
  {
    hidden: true,
    name: 'Login',
    path: '/login',
    component: Login
  },
];

export default routes;