import React, { Component } from "react";
import './style.scss';
import { Provider } from '../../contexts';
import routes from '../../routes';
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import { Layout } from 'antd';

class Main extends Component {

  state = {
    leagues: ['Hardcore Legion', 'Softcore Legion', 'Hardcore', 'Softcore'],
    selectedLeague: 'Hardcore Legion',
  };

  // Using arrow function to bypass constructor and bindind
  handleStateChange = payload => {
    this.setState(payload);
  };

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
