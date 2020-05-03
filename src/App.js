import React, { Component } from 'react';
import Header from './components/header.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beans: null
    }
  }

  render()  {
    return  (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }

}

export default App;
