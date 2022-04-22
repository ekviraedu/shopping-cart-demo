import React, { Component } from "react";

export default class ProductComp extends Component {
  /*state = {
    productItems: [],
    productTotal: 0
  };

  getCartTotal = () => {
    return this.state.productTotal;
  };*/

  addItems = () => {
    //this.setState((state) => ({
    // productItems: [...state.productItems, "umbrella"],
    // productTotal: state.productTotal + priceItem
    //}));
    this.props.setItems([...this.props.cartItems, this.props.id]);
    this.props.setTotal(this.props.cartTotal + this.props.price);
  };

  removeItems = () => {
    /*let arr = this.state.productItems;
    arr.splice(0, 1);

    this.setState({
      productItems: arr,
      productTotal: priceItem * this.state.productItems.length
    });*/
  };

  render() {
    return (
      <div className="productImage">
        <span role="img" aria-label="umbrella">
          {this.props.emoji}
        </span>
        <p>Product name: {this.props.name}</p>
        <p>Product price: {this.props.price} USD</p>
        <button onClick={this.addItems}>Add</button>
        &nbsp; &nbsp;
        <button onClick={this.removeItems}>Remove</button>
      </div>
    );
  }
}
