import React from 'react';
import autoBind from 'react-autobind';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      "humans": {},
      "stores": {}
    };
  }

  render() {
    
	if (this.props.tab_checkout) {
		var checkoutStyle = {
			color: "#fff",
			backgroundColor: "#449d44",
			borderColor: "#398439"
		};
		
		var checkoutStyleLI = {
			display: "block"
		};
	}
	
	return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className={this.props.tab_one}><a href="/">Home</a></li>
              <li className={this.props.tab_two}><a href="/menu">Menu</a></li>
              <li className={this.props.tab_three}><a href="/register">Register</a></li>
			  <li style={checkoutStyleLI}><a href="#" style={checkoutStyle}>Checkout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation;
