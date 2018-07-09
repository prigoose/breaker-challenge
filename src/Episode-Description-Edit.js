import React, { Component } from 'react';
import './Episode-Description-Edit.css';

class EpisodeDescriptionEdit extends Component {

  render() {
    return (
      <textarea rows="6" defaultValue={this.props.description} onBlur={(e) => this.props.editEpisodeDescription(e)} ></textarea>
    );
  }
}

export default EpisodeDescriptionEdit;


