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


    return (
        <div id="player">
          <div className="container">
            <div className="row vertical-center">

              <div className="col-md-3">
                <img className="player-episode-image left" src={this.props.episode_image} alt="episode" height="70" width="70"/>
                <p id="player-episode-title">{this.props.episode_title}</p>
              </div>

              <div className="controls col-md-6">
                <div className="buttons">
                  <button id="skip-backward-5" className="control-button fa fa-backward" onClick={this.props.backward}></button>
                  <button id="play-pause" className={`control-button fa ${this.props.playPauseButton}`} onClick={this.play}></button>
                  <button id="skip-forward-5" className="control-button fa fa-forward" onClick={this.props.forward}></button>
                </div>
                  <div className="time-elapsed"></div>
                  <input type="range" id="progress-bar" name="progress-bar" value={this.props.percent_elapsed} step="any" onInput={(event) => this.props.userSeek(event)} />
                  <div className="time-remaining"></div>

              </div>

              <div className="col-md-3">
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


