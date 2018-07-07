import React, { Component } from 'react';
import './Episode.css';

class Episode extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <img className="episode-image" src={this.props.episode_image} alt="episode" height="300" width="300"/>
                <p className="show-title">{this.props.show_title}</p>
              </div>
              <div className="col-sm">
                <p className="episode-title">{this.props.episode_title}</p>
                <p className="episode-description">{this.props.description}</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Episode;


