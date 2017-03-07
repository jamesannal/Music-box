var React = require('react');
var ReactDOM = require('react-dom');

var CountryContainer = require('./containers/MusicContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <CountryContainer />,
    document.getElementById('app')
  );
};
