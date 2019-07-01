import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import './index.css';

class App extends Component {
  state = {  }

  render() { 
    return (
      <React.Fragment>
        <div className="headerWrapper">
          <Sidebar />
          <Header />
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;