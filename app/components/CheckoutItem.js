import React  from 'react';
import autoBind from 'react-autobind';

class CheckoutItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
	this.state = {
		typed: this.props.qty,
		price: this.props.price
	}
	/*this.state = {
      "newItem":{}
    };*/
  }
	
  /*deleteItem(itemID) {
	this.props.deleteItem(this.props.id);
  }*/
  
  onChange(event) {
	
	if(event.target.value != "") {
		let itemsQty =  parseInt(event.target.value);
		let itemsPrice = parseFloat(this.state.price);
			itemsPrice = parseFloat(this.props.price * itemsQty);
		
		
		this.setState({
			typed: itemsQty,
			price: itemsPrice
		}, function() { 
			this.props.updateTotal(this.state.price);
		})
	}
	 
    /*this.setState({
      newItem:{
        id: this.props.id,
        name: this.props.name,
        price: this.props.price,
		image: this.props.image,
        qty: event.target.value
      }}, function() {
          this.props.addToCart(this.state.newItem);
      });*/
  }
  
  render() {
    return(
		<div>
			<div className="row">
				<div className="col-xs-12 col-md-3"><img className="img-responsive" src={this.props.image} /></div>
				<div className="col-xs-12 col-md-4">
					<h4 className="product-name"><strong>{this.props.name}</strong></h4>
				</div>
				<div className="col-xs-12 col-md-5">
					<div className="col-xs-6 text-right">
						<h6><strong>£{this.state.price}<span className="text-muted">x</span> {this.state.typed}</strong></h6>
					</div>
					<div className="col-xs-4">
						<input type="text" className="form-control input-sm" onChange={this.onChange.bind(this)}/>
					</div>
					<div className="col-xs-2">
						<button type="button" className="btn btn-link btn-xs">
							<span className="glyphicon glyphicon-trash"> </span>
						</button>
					</div>
				</div>
			</div>
			<hr />
		</div>
    )
  }
};

export default CheckoutItem
