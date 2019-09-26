import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import './style.scss';
import { Provider } from '../../contexts';
import routes from '../../routes';
import { Sidebar, Footer, Header } from "../../components/";
import { Layout } from 'antd';
import { getLeagues, getActs, getUserByName } from '../../api';
class Main extends Component {

  state = {
    leagues: [],
    selectedLeague: 'Select your league',
    acts: [],
    user: null
  };

  // Using arrow function to bypass constructor and bindind
  handleStateChange = (payload, callback) => {
    callback ? this.setState(payload, callback) : this.setState(payload);
  };

  async getLeagues() {
    const poeLeagues = await getLeagues();
    const leagues = poeLeagues.filter(league => league.id.indexOf('SSF ') === -1);
    this.setState({leagues})
  }

  getActs() {
    const acts = getActs();
    this.setState({acts});
  }

  async getRegisteredUser() {
    const username = localStorage.getItem('username');
    if (username) {
      const user = await getUserByName(username);
      this.setState({user});
    }
  }

  logout = () => {
    this.setState({user: null});
    localStorage.removeItem('username');
    this.props.history.push('/login');
  }

  componentDidMount() {
    this.getLeagues();
    this.getActs();
    this.getRegisteredUser();
  }

  render() {
    const { handleStateChange, state, logout } = this;
    return (
      <Provider value={{ state, handleStateChange, logout }}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar routes={routes} />
          <Layout>
            <Header />
            {this.props.children}
            <Footer />
          </Layout>
        </Layout>
      </Provider>
    );
  }
}

export default withRouter(Main);
