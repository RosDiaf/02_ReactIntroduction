import React from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router';
import Navigation from './Navigation';
import MenuItem from './MenuItem';
import Cart from './Cart';
import Checkout from './Checkout';
import samples from '../sample-data';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.Cart = this.Cart.bind(this);

    this.state = {
      "menu": {},
      "menuTab": "active",
      "cart": [],
      "cart_items": false,
      "cart_items_content": "cart-items-show",
      "headerText": 'Hide Cart Items +',
	  "checkout": false
    };

  }

  loadSampleData() {
    this.setState({
      menu: samples.menu.starter
    });
  }

  componentWillMount() {
    this.loadSampleData();
  }

  Cart(item) {
    let items = this.state.cart;
    items.push(item);
    this.setState({cart:items});
  }

  deleteItem(itemID) {	let items = this.state.cart;
    let index = items.findIndex(x => x.id === itemID);
    items.splice(index, 1);
    this.setState({cart:items});
  }

  onToggleCart() {
    if(!this.state.cart_items) {
      this.setState({ headerText: 'Hide Cart Items +', "cart_items": true, "cart_items_content": "cart-items-show"});
    }else {
      this.setState({ headerText: 'View Cart Items -', "cart_items": false, "cart_items_content": "cart-items-hide"});
    }
  }

  showCheckout(statusComponent) {
	this.setState({ checkout:  statusComponent});
  }

  render() {
    var menuItem = this.state.menu.map(function(item) {
      return <MenuItem 	key={item.id} 
						id={item.id} 
						image={item.image} 
						name={item.name} 
						description={item.description} 
						price={item.price} 
						addToCart={this.Cart.bind(this)}/>
    }.bind(this));

    return (
      <div>
          <Navigation tab_two={this.state.menuTab} tab_checkout={this.state.checkout} />
          <div className="container menu">
            <div className="row">
                <Checkout itemsInCart={this.state.checkout} itemsList={this.state.cart} /*addToCart={this.Cart.bind(this)}*/ />
				<div className="col-xs-12 col-md-8">
					<h2>Menu</h2>
					{menuItem}
                </div>
                <div className="col-xs-12 col-md-4 cart">
                    <h2 onClick={this.onToggleCart.bind(this)}>{this.state.headerText}</h2>
                    <Cart items={this.state.cart} 
						  cart_items_content={this.state.cart_items_content} 
						  deleteItem={this.deleteItem.bind(this)} 
						  showCheckout={this.showCheckout.bind(this)} />
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Menu;
