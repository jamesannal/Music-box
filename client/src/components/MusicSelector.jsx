var React = require('react');

var MusicSelector = React.createClass({

  getInitialState: function(){
    return { selectedIndex: undefined };
  },

  render: function () {
    var options = this.props.songs.map(function(music, index){
      return <option value={index} key={index}>{music.name}</option>
    });

    return (
      <select 
        id="songs" 
        value={this.state.selectedIndex} 
        onChange={this.handleChange}>
        {options}
      </select>
    );
  },

  handleChange: function(event){
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});

    var selectedMusic = this.props.songs[newIndex];
    this.props.didSelectMusic(selectedMusic);
  }
});

module.exports = MusicSelector;
