import React, { Component } from 'react';
import Sidebar from './components/sidebar';
class App extends Component {
  state = {  }

  render() { 
    return (
      <React.Fragment>
        <Sidebar />
      </React.Fragment>
    );
  }
}
 
export default App;