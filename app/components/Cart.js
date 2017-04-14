import React  from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';
import { Link } from 'react-router';
import autoBind from 'react-autobind';


class Cart extends React.Component {
  constructor(props) {
    super(props);
	this.state = {showComponent: false}
    autoBind(this);
  }

  deleteItem(itemID) {
	this.props.deleteItem(itemID);
  }
  
  handleToggleCheckout() {
	this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }), function() {
          this.props.showCheckout(this.state.showComponent);
    });
  }
  
  render() {
 
	let cartItem, total = 0, qty = 0, counter = 0, current = -1;
    if(this.props.items) {
      cartItem = this.props.items.map(item => {
          total += item.price;
          qty += 1;
          return (
            <CartItem key={counter++} index={counter++} id={item.id} name={item.name} price={item.price} deleteItem={this.deleteItem} />
          );
      });
    }

    return(
      <div className={this.props.cart_items_content}>
        {cartItem}
        <div className="col-xs-12 col-md-12">
          <h4>Qty: {qty}</h4>
          <h4>Total: £{parseFloat(total)}</h4>
		  <a onClick={this.handleToggleCheckout.bind(this)} className="btn btn-success">View Cart</a>
        </div>
      </div>
    )
  }
};

export default Cart
