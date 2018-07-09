import React, { Component } from 'react';
import './Episode-Title-Edit.css';

class EpisodeTitleEdit extends Component {

  render() {
    return (
      <div>
        <input type="text" className="episode-page-episode-title" defaultValue={this.props.episode_title}></input>
      </div>
    );
  }
}

export default EpisodeTitleEdit;


