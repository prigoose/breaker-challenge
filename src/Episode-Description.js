import React, { Component } from 'react';
import './Episode-Description.css';

class EpisodeDescription extends Component {

  render() {
    return (
      <p class="offblack text-large">{this.props.description}</p>
    );
  }
}

export default EpisodeDescription;


