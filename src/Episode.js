import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import moment from 'moment';
import EditButton from './Edit-Button.js';
import SaveButton from './Save-Button.js';
import EpisodeImage from './Episode-Image.js';
import ImageUpload from './Episode-Image-Edit.js';
import EpisodeTitle from './Episode-Title.js';
import EpisodeTitleEdit from './Episode-Title-Edit.js';
import EpisodeDescription from './Episode-Description.js';
import EpisodeDescriptionEdit from './Episode-Description-Edit.js';
import './Episode.css';

class Episode extends Component {

  render() {

    return (
        <div className="content container">
          <div className="jumbotron">
            <div className="row center">
              <div className="col-md-12">
              <button className="edit right"><Route exact path='/' component={EditButton} /><Route path='/edit' component={SaveButton} /></button>
                <p className="show-title episode-page-show-title">{this.props.show_title}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
              <Route exact path='/' render={routeProps => <EpisodeImage {...routeProps} episode_image={this.props.episode_image}/>} />
              <Route path='/edit' render={routeProps => <ImageUpload {...routeProps} episode_image={this.props.episode_image}/>} />
              </div>
              <div className="col-md-6">
                <div className="basic-episode-info">
                  <Route exact path='/' render={routeProps => <EpisodeTitle {...routeProps} episode_title={this.props.episode_title}/>} />
                  <Route path='/edit' render={routeProps => <EpisodeTitleEdit {...routeProps} episode_title={this.props.episode_title}/>} />
                  <p><span className="episode-length">{this.props.duration} • </span><span>{moment(this.props.date_published, "YYYYMMDD").fromNow()}</span></p>
                </div>
                <div className="episode-description">
                  <Route exact path='/' render={routeProps => <EpisodeDescription {...routeProps} description={this.props.description}/>} />
                  <Route path='/edit' render={routeProps => <EpisodeDescriptionEdit {...routeProps} description={this.props.description}/>} />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Episode;


