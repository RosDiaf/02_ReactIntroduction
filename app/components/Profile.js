import React from 'react';

class Profile extends React.Component {

  constructor(props) {
    super(props);
	
  }
	
	
  render() {
	
	var details = this.props.details;
	
	var profile = Object.keys(details).map(function(keyName, keyIndex) {
	  return <p key={keyIndex}><h5 className="keyName">{keyName}:</h5> <h5>{details[keyName]}</h5></p>;
	})
	
    return(
      <div className="col-xs-6 col-md-12">
        <h2>Profile</h2>
		{profile}
      </div>
    )
  }
};

export default Profile;
