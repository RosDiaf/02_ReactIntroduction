import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import autoBind from 'react-autobind';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      "newItem":{}
    };
  }

  addToCart() {
    this.setState({
      newItem:{
        id: this.props.id,
        name: this.props.name,
        price: this.props.price,
		image: this.props.image,
        qty: 1
      }}, function() {
          this.props.addToCart(this.state.newItem);
      });
  }

  render() {
    return (
      <div>
        <div className="col-xs-12 col-md-3">
          <img src={this.props.image} alt="" />
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <h4>Price: £{parseFloat(this.props.price)}</h4>
          <button className="btn btn-primary" onClick={this.addToCart.bind(this)}>Add to Cart</button>
        </div>
      </div>
    )
  }
};

export default MenuItem;
