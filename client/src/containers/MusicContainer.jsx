var React = require('react');
var MusicSelector = require('../components/MusicSelector');
var MusicDetail = require('../components/MusicDetail');

var MusicContainer = React.createClass({

  componentDidMount: function () {
    var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function () {
      if (request.status !== 200) return;
      var data = JSON.parse(request.responseText);
      this.setState({songs: data, focusMusic: data[0]});
    }.bind(this);

    request.send();
  },

  getInitialState: function () {
    return { songs: [], focusMusic: null };
  },

  render: function () {
    return (
      <div>
        <h2>Music Container</h2>
        <MusicSelector 
          songs={this.state.songs} 
          didSelectMusic={this.didSelectMusic}/>
        <MusicDetail 
          music={this.state.focusMusic}/>
      </div>
    );
  },

  didSelectMusic: function(music) {
    this.setState({focusMusic: music});
  }
});

module.exports = MusicContainer;


//componentWillMount - before - no DOM access
//componentDidMount - after - can access DOM
//componentWillRecieveProps - change state based on new props
//componentDidUpdate - check to see if accessed DOM