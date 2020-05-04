import React, { Component } from 'react'
import Item from './item.js'
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
      console.log(this.state.items);
    }).catch(err => console.log(err))
  }



  componentDidMount() {
    this.getItems();
  }

  render()  {
    return(
      <React.Fragment>
        <div className='main-div-hold'>
        {this.state.items.map((itemData)=>  (
          <Item
            key={itemData.id}
            data={itemData}
          />
        ))}

        </div>
      </React.Fragment>
    )
  }
}




export default Main
