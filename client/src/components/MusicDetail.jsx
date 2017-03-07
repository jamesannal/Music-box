var React = require('react');

var MusicDetail = function(props) {
  if (!props.music){
    return <h4>No music selected.</h4>
  }
  return <h4></h4>
};

module.exports = MusicDetail;
