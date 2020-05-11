import React, { Component } from 'react'
import Item from './item.js'
import Home from './home.js'
import Gallery from './gallery.js'
import axios from 'axios'


let baseUrl = 'http://localhost:8888/items'

class Main extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      items: []
    }
  }

// GET THE ITEM DATA
  getItems = () => {
    axios.get(`${baseUrl}`)
    .then(res =>  {
      this.setState({
        items: res.data
      })
    }).catch(err => console.log(err))
  }


  componentDidMount() {
    this.getItems();
  }

  render()  {
    return(
      <React.Fragment>
        <div className='main-div-hold'>
        {
          this.props.view.page === 'home' ?
          <Home />
          : this.props.view.page === 'itemSearch' ?

            this.state.items.map((itemData)=>  (
            <Item
              key={itemData.id}
              data={itemData}
            />
          ))
        : <Gallery />
        }
        </div>
      </React.Fragment>
    )

  }
}




export default Main
