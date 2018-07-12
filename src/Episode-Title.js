import React, { Component } from 'react';

class EpisodeTitle extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.episode_title}</h2>
      </div>
    );
  }
}

export default EpisodeTitle;


