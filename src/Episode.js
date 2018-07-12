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

  formatDuration() {
    let totalSeconds = this.props.duration;
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds-(hours * 3600)) / 60);
    if (minutes < 10) {minutes = '0' + minutes} 
   
    this.formattedDuration = `${minutes} minutes`;
    if (hours > 1) { 
      this.formattedDuration = `${hours} hours, ${this.formattedDuration}`;
    }
  }

  render() {

    this.formatDuration();

    return (
      <div className="content container">
      <div className="jumbotron border shadow">
            <div className="row">
              <div className="col-md-12">
                <button className="btn shadow-sm right">
                  <Route exact path='/' component={EditButton} />
                  <Route 
                    path='/edit' 
                    render={routeProps => 
                      <SaveButton {...routeProps} save={this.props.save}/>} 
                  />
                </button>
                <h1 className="display-3"><span className="bg-white">&nbsp;{this.props.show_title}&nbsp;</span></h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 offset-md-1">
                <Route 
                  exact path='/' 
                  render={routeProps => 
                    <EpisodeImage {...routeProps} 
                      episode_image={this.props.episode_image}/>} 
                    />
                <Route 
                  path='/edit' 
                  render={routeProps => 
                    <ImageUpload {...routeProps} episode_image={this.props.episode_image}/>} 
                />
              </div>
              <div className="col-md-6">
                <div>
                  <Route 
                    exact path='/' 
                    render={routeProps => 
                      <EpisodeTitle {...routeProps} 
                        episode_title={this.props.episode_title}/>} 
                      />
                  <Route 
                    path='/edit' 
                    render={
                      routeProps => 
                        <EpisodeTitleEdit {...routeProps} 
                          episode_title={this.props.episode_title} 
                          editEpisodeTitle={this.props.editEpisodeTitle}
                        />
                    }
                  />
                  <p className="offblack">
                    <span className="episode-length">{this.formattedDuration} • </span>
                    <span>{moment(this.props.date_published, "YYYYMMDD").fromNow()}</span>
                  </p>
                </div>
                <div className="episode-description">
                  <Route 
                    exact path='/' 
                    render={routeProps => 
                      <EpisodeDescription {...routeProps} 
                        description={this.props.description}
                      />
                    } 
                  />
                  <Route 
                    path='/edit' 
                    render={routeProps => 
                      <EpisodeDescriptionEdit {...routeProps} 
                        description={this.props.description}
                        editEpisodeDescription={this.props.editEpisodeDescription}
                      />
                    } 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Episode;


