var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var RestClient = require('RestClient');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <MuiThemeProvider>
    <RestClient />
  </MuiThemeProvider>,
  document.getElementById('app')
);
