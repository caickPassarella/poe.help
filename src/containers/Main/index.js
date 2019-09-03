import React, { Component } from "react";
import './style.scss';
import { Provider } from '../../contexts';
import routes from '../../routes';
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import { Layout } from 'antd';
import APIClient from '../../api';

class Main extends Component {

  state = {
    leagues: [],
    selectedLeague: 'Select your league',
    acts: [],
  };

  // Using arrow function to bypass constructor and bindind
  handleStateChange = payload => {
    this.setState(payload);
  };

  async getLeagues() {
    const poeLeagues = await APIClient.getLeagues();
    const leagues = poeLeagues.filter(league => league.id.indexOf('SSF ') === -1);
    this.setState({leagues})
  }

  getActs() {
    const acts = APIClient.getActs();
    console.log(acts);
    this.setState({acts});
  }

  componentDidMount() {
    this.getLeagues();
    this.getActs();
  }

  render() {
    const { handleStateChange, state } = this;
    return (
      <Provider value={{ state, handleStateChange }}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar routes={routes} />
          <Layout>
            <MainHeader/>
            {this.props.children}
            <Footer />
          </Layout>
        </Layout>
      </Provider>
    );
  }
}

export default Main;
