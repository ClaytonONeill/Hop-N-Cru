import React, { Component } from 'react'


class Item extends Component {
  constructor(props)  {
    super(props);
  }

  render()  {
    return(
      <React.Fragment>
        <div className='item-contain'>
        <img src={this.props.data.image} className='item-image' alt='beer-picture'></img>
          <div className='item-info-contain'>
            <h2>{this.props.data.name}</h2>
            <h4>${this.props.data.price}.00</h4>
            <h4>Qantity in stock: {this.props.data.quantity}</h4>
          </div>
        </div>
      </React.Fragment>
    )
  }


}


export default Item;
