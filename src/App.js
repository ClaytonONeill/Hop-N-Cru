import React, { Component } from 'react';
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'

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
        <Main />
        <Footer />
      </React.Fragment>
    )
  }

}

export default App;
