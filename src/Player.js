import React, { Component } from 'react';
import './Player.css';

class Player extends Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    this.props.playPause();
  }

  pause() {
    this.props.audio.pause();
  }

  render() {
    
    // TO DO: pull out time formatting into separate method
    let formattedTimeElapsed = '00:00:00';
    let formattedTimeRemaining = '';
    
    if (this.props.audio !== null && this.props.audio.state() === 'loaded') {
      let totalSecondsElapsed = Math.floor(this.props.audio.seek());
      let hoursElapsed = Math.floor(totalSecondsElapsed / 3600);
      if (hoursElapsed < 10) {hoursElapsed = '0' + hoursElapsed}
      let minutesElapsed = Math.floor((totalSecondsElapsed-(hoursElapsed * 3600)) / 60);
      if (minutesElapsed < 10) {minutesElapsed = '0' + minutesElapsed}
      let secondsElapsed = totalSecondsElapsed % 60;
      formattedTimeElapsed = `${hoursElapsed}:${minutesElapsed}:${secondsElapsed}`;

      let totalSecondsRemaining = Math.floor(this.props.audio.duration()) - totalSecondsElapsed;
      let hoursRemaining = Math.floor(totalSecondsRemaining / 3600);
      if (hoursRemaining < 10) {hoursRemaining = '0' + hoursRemaining}
      let minutesRemaining = Math.floor((totalSecondsRemaining-(hoursRemaining * 3600)) / 60);
      if (minutesRemaining < 10) {minutesRemaining = '0' + minutesRemaining}
      let secondsRemaining = totalSecondsRemaining % 60;
      formattedTimeRemaining = `${hoursRemaining}:${minutesRemaining}:${secondsRemaining}`;
      }

    return (
        <div id="player">
          <div className="container">
            <div className="row vertical-center">

              <div className="d-none d-md-block col-md-3">
                <img className="player-episode-image left" src={this.props.episode_image} alt="episode" height="70" width="70"/>
                <p id="player-episode-title">{this.props.episode_title}</p>
              </div>

              <div className="controls col-md-6">
                <div className="buttons">
                  <button id="skip-backward-5" className="control-button fa fa-backward" onClick={this.props.backward}></button>
                  <button id="play-pause" className={`control-button fa ${this.props.playPauseButton}`} onClick={this.play}></button>
                  <button id="skip-forward-5" className="control-button fa fa-forward" onClick={this.props.forward}></button>
                </div>
                  <span className="time-elapsed">{formattedTimeElapsed}</span>
                  <input type="range" id="progress-bar" name="progress-bar" value={this.props.percent_elapsed} step="any" onInput={(event) => this.props.userSeek(event)} />
                  <span className="time-remaining">{formattedTimeRemaining}</span>
              </div>

              <div className="d-none d-md-block col-md-3">
                <button id="like" className="control-button fa fa-heart"></button>
                <button id="comment" className="control-button fa fa-comment"></button>
                <button id="share" className="control-button fa fa-share-alt"></button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Player;


