import React, { Component } from 'react';
import moment from 'moment';
import './Episode.css';

class Episode extends Component {

  render() {
    return (
        <div className="content container">
          <div className="jumbotron">
            <div className="row center">
              <div className="col-md-12">
                <p className="show-title episode-page-show-title">{this.props.show_title}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img className="episode-image" src={this.props.episode_image} alt="episode" height="300" width="300"/>
              </div>
              <div className="col-md-6">
                <div className="basic-episode-info">
                  <p className="episode-title episode-page-episode-title">{this.props.episode_title}</p>
                  <p><span className="episode-length">{this.props.duration} • </span><span>{moment(this.props.date_published, "YYYYMMDD").fromNow()}</span></p>
                </div>
                <div className="episode-description">
                  <p>{this.props.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Episode;


