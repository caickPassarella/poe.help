import React, { Component } from "react";
import './style.scss'

import { Provider } from '../Context';

import routes from '../../routes';

import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
//import Header from "../../components/Header";

import { Layout } from 'antd';
const { Header } = Layout;

class Main extends Component {
  state = {
    leagues: ['Hardcore Legion', 'Softcore Legion', 'Hardcore', 'Softcore']
  };

  render() {
    return (
      <Provider value={this.state.leagues}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar routes={routes} />
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} />
            {this.props.children}
            <Footer />
          </Layout>
        </Layout>
      </Provider>
    );
  }
}

export default Main;
