import React  from 'react';
import autoBind from 'react-autobind';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
	
  deleteItem(itemID) {
	this.props.deleteItem(this.props.id);
  }
  render() {
    return(
      <div className="col-xs-12 col-md-12">
        <div className="col-xs-12 col-md-5">
            <h5>{this.props.name}</h5>
        </div>
        <div className="col-xs-12 col-md-5">
            <h5>£{parseFloat(this.props.price)}</h5>
        </div>
		<div className="col-xs-12 col-md-2">
            <h5 className="remove" onClick={this.deleteItem.bind(this)}>-</h5>
        </div>
      </div>
    )
  }
};

export default CartItem
