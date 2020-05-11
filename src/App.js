import React, { Component } from 'react'
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleView = (view) =>  {
    let pageTitle = '';

    switch (view) {
        case 'home' :
          pageTitle = 'Home Page'
          break
        case 'itemSearch' :
            pageTitle = 'Item Search'
            break
        case 'gallery' :
            pageTitle = 'Photo Gallery'
           break
        default:
           break
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
