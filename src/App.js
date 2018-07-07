import React, { Component } from 'react';
import {Howl} from 'howler';
import Header from './Header.js';
import Episode from './Episode.js';
import Player from './Player.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    var stream = new Howl({
      src: ['https://content.production.cdn.art19.com/episodes/cf652463-9388-413e-a278-a108b29b8e2b/8b15b50bde22e49e19c9fd96d559d8e3ba5f73de8fe8ba1b2b5813ec965cf1e5e2bedbd181f262ad7bd4e808916566a077c5ff313130ed01a2d3c68426f92c30/02-Tim_Ferriss_Show_-Josh_Waitzkin.mp3'],
      ext: ['mp3'],
      auto: true,
      html5: true
    });

    this.state = {
      show_title: 'The Tim Ferriss Show',
      episode_title: 'Episode 2: Josh Waitzkin',
      episode_image: 'https://breaker-cache.s3.amazonaws.com/images/873c449342fae6bc3414d59f01f9ce79/0x0/91cb53ae0d5dbb379b9dffecf0a772593891d0d09bbe6d90ee746edbdb79e3ec75584f2ceb8260e9f675a90c05419b9b99842a76905b686f0f51c1a9d3e227ab.jpg',
      description: 'Josh Waitzkin was the basis for the book and movie "Searching for Bobby Fischer." Considered a chess prodigy, he has learning strategies that can be applied to anything, including his other loves of Brazilian Jiu-Jitsu (he\'s a black belt under Marcelo Garcia) and Tai Chi Push Hands (he\'s a world champion). Now, he spends his time coaching the world\'s top performers, whether Mark Messier, Cal Ripken Jr., or hedgefund managers. This episode is DEEP in the best way possible. And for a change from Episode 1, I\'m totally sober.',
      audio_link: 'https://content.production.cdn.art19.com/episodes/cf652463-9388-413e-a278-a108b29b8e2b/8b15b50bde22e49e19c9fd96d559d8e3ba5f73de8fe8ba1b2b5813ec965cf1e5e2bedbd181f262ad7bd4e808916566a077c5ff313130ed01a2d3c68426f92c30/02-Tim_Ferriss_Show_-Josh_Waitzkin.mp3',
      audio: stream,
      playing: false,
      playPauseButton: 'fa-play',
      percent_elapsed: 0
    };
    
    this.playPause = this.playPause.bind(this);
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    this.progress=this.progress.bind(this);
    this.userSeek=this.userSeek.bind(this);
  }

  progress() {
    let progress = (this.state.audio.seek() / this.state.audio.duration()) * 100;
    this.setState({
      percent_elapsed: progress,
    })
  }

  userSeek(event) {
    let seconds = (Number(event.target.value) / 100) * this.state.audio.duration();
    let updatedAudio = this.state.audio.seek(seconds);
    this.setState({
      percent_elapsed: event.target.value,
      audio: updatedAudio
    })
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.playing) {this.progress()}
    }, 1000);
  }

  // break this into multiple functions
  playPause() { 
    let updatedPlayState = !(this.state.playing);
    if (!this.state.playing) {
      this.setState({
        playing: updatedPlayState,
        playPauseButton: 'fa-pause'
      })
      this.state.audio.play();
    } else if (this.state.playing) {
      this.setState({
        playing: updatedPlayState,
        playPauseButton: 'fa-play'
      })
      this.state.audio.pause();
    }
  }

  forward() {
    let currentTime = this.state.audio.seek();
    this.state.audio.seek(currentTime + 5);
  }

  backward() {
    let currentTime = this.state.audio.seek();
    this.state.audio.seek(currentTime - 5);
  }

  render() {

    return (
      <div>
        <Header />
        <Episode 
          show_title={this.state.show_title} 
          episode_title={this.state.episode_title} 
          episode_image={this.state.episode_image} 
          description={this.state.description} 
          playing={this.state.playing}
        />
        <Player 
          episode_title={this.state.episode_title} 
          episode_image={this.state.episode_image} 
          audio={this.state.audio} playing={this.state.playing} 
          playPause={this.playPause} 
          playPauseButton={this.state.playPauseButton} 
          forward={this.forward} 
          backward={this.backward}
          percent_elapsed={this.state.percent_elapsed}
          userSeek={this.userSeek}
        />
      </div>
    );
  }
}

export default App;


