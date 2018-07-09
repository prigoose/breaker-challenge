import React, { Component } from 'react';
import './Episode-Title.css';

class EpisodeTitle extends Component {

  render() {
    return (
      <div>
        <p className="episode-page-episode-title">{this.props.episode_title}</p>
      </div>
    );
  }
}

export default EpisodeTitle;


