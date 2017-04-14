import React from 'react';
import Navigation from './Navigation';
import InboxPane from './InboxPane';
import StorePane from './StorePane';
import autoBind from 'react-autobind';
import samples from '../sample-data';

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      "humans": {},
      "stores": {},
      "menuTab": "active"
    };
  }

  loadSampleData() {
    this.setState(samples);
  }

  // Handle when user navigates to a conversation directly without first loading the index...
  componentWillMount() {
    if('human' in this.props.params){
      this.loadSampleData();
    }
  }
  
  render() {
    return (
      <div>
        <Navigation tab_one={this.state.menuTab} />
        <div className="container main">

          <div className="row">
            <div className="col-xs-12 col-md-12">
              <button onClick={this.loadSampleData} className="btn btn-default">Load Orders</button>
            </div>
            <div className="col-xs-12 col-md-12">
              <div className="col-xs-12 col-md-4">
                <InboxPane humans={this.state.humans} />
              </div>
                <div className="col-xs-12 col-md-4">
                {this.props.children || <div id="conversation-pane" className="column"><h4>Select a Conversation from the Inbox</h4></div>}
              </div>
              <div className="col-xs-12 col-md-4">
                <StorePane stores={this.state.stores} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default App;
