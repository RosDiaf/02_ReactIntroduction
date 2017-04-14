import React from 'react';
import Navigation from './Navigation';
import Profile from './Profile';
import autoBind from 'react-autobind';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Register extends React.Component {

  constructor(props) {
    super(props);
    autoBind(this);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    this.state = {
      "menuTab": "active",
      "users": {}
    };

  }

  formHandler(e) {
    //console.log(this.refs.name.value);
    this.setState({
      users: {
        firstname: this.refs.name.value,
        surname: this.refs.surname.value,
        email: this.refs.email.value
      }
    });

    e.preventDefault();
  }

  render() {
    return(
      <div className="col-xs-6 col-md-12 register">
        <Navigation tab_three={this.state.menuTab} />
        <div className="col-xs-6 col-md-4">
		<h2>Register</h2>
          <form onSubmit={this.formHandler.bind(this)}>
            <div className="form-group">
              <label htmlFor="exampleInputName1">First name</label>
              <input ref="name" type="text" className="form-control" id="exampleInputName1" placeholder="Enter first name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputName2">Surname</label>
              <input ref="surname" type="text" className="form-control" id="exampleInputName2" placeholder="Enter second name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail2">Email</label>
              <input ref="email" type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
        <div className="col-xs-6 col-md-8">
            <Profile details={this.state.users} />
        </div>
      </div>
    )
  }
};

export default Register;
