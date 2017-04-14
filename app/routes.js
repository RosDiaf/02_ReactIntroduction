import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import ConversationPane from './components/ConversationPane';
import Menu from './components/Menu';
import Register from './components/Register';

//import $ from "jquery";


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/conversation/:human" component={ConversationPane}></Route>
    </Route>
    <Route path="/menu" component={Menu}>
      <Route path="/menu" component={Menu}></Route>
    </Route>
    <Route path="/register" component={Register}>
      <Route path="/register" component={Register}></Route>
    </Route>
  </Router>
), document.getElementById('main'))
