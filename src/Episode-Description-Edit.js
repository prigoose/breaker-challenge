import React, { Component } from 'react';
import './Episode-Description-Edit.css';

class EpisodeDescriptionEdit extends Component {

  render() {
    return (
      <textarea rows="6" defaultValue={this.props.description}></textarea>
    );
  }
}

export default EpisodeDescriptionEdit;


