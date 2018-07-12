import React, { Component } from 'react';
import './Episode-Image.css';

class EpisodeImage extends Component {

  render() {
    return (
      <img className="white-border shadow-sm" src={this.props.episode_image} alt="episode" height="300" width="300"/>
    );
  }
}

export default EpisodeImage;


