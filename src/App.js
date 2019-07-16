import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import './index.css';

class App extends Component {
  state = {  }

  render() { 
    return (
      <>
        <div className="headerWrapper">
          <Sidebar/>
          <Header/>
        </div>
      </>
    );
  }
}
 
export default App;