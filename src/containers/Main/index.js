import React, { Component } from "react";
import './style.scss'

import routes from '../../routes';

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

class Main extends Component {
  state = {
    leagues: ['Hardcore Legion', 'Softcore Legion', 'Hardcore', 'Softcore']
  };

  render() {
    return (
      <div className="container">
        <Sidebar routes={routes} />
        <div className="wrapper">
          <Header leagues={this.state.leagues} />
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Main;
