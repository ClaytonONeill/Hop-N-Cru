import React, { Component } from 'react'
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'Home Page'
      }
    }
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
      this.setState({
        view: {
          page: view,
          pageTitle: pageTitle
        }
      })
  }

  render()  {
    return  (
      <React.Fragment>
        <Header
          handleView={this.handleView}
         />
        <Main
          view={this.state.view}
         />
        <Footer />
      </React.Fragment>
    )
  }

}

export default App;
