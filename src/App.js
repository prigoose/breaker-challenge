import React, { Component } from 'react';
import { Howl } from 'howler';
import Header from './Header.js';
import Episode from './Episode.js';
import Player from './Player.js';
import $ from "jquery";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show_title: '',
      episode_title: '',
      episode_title_user_edit: null,
      episode_image: '',
      episode_image_user_edit: null,
      description: '',
      description_user_edit: null,
      audio_link: '',
      audio: null,
      playing: false,
      playPauseButton: 'fa-play',
      percent_elapsed: 0,
      date_published: '',
      duration: '',
    };
    
    this.playPause = this.playPause.bind(this);
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    this.progress=this.progress.bind(this);
    this.userSeek=this.userSeek.bind(this);
    this.save=this.save.bind(this);
    this.editEpisodeTitle=this.editEpisodeTitle.bind(this);
    this.editEpisodeDescription=this.editEpisodeDescription.bind(this);
    this.editImage=this.editImage.bind(this);
  }
  
  // --> METHODS FOR EDITING THE EPISODE INFO <-- //

  editEpisodeTitle(event) {
    event.preventDefault();
    this.setState({
      episode_title_user_edit: event.target.value
    })
  }

  editEpisodeDescription(event) {
    event.preventDefault();
    this.setState({
      description_user_edit: event.target.value
    })
  }

  editImage(image_url) {
    this.setState({
      episode_image_user_edit: image_url
    })
  }

  save() {
    let data = {};
    if (this.state.episode_title_user_edit !== null && this.state.episode_title_user_edit !== this.state.episode_title) {
      data.episode_title = this.state.episode_title_user_edit;
    }
    if (this.state.description_user_edit !== null && this.state.description_user_edit !== this.state.description) {
      data.episode_title = this.state.description_user_edit;
    }
    if (this.state.episode_image_user_edit !== null && this.state.episode_image_user_edit !== this.state.episode_image) {
      data.episode_title = this.state.episode_image_user_edit;
    }
    $.ajax({
      headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
      },
      url : 'http://localhost:4000/episode/29314799',
      type : 'PATCH',
      data : JSON.stringify(data),
      success : function(response) {
          console.log('Response from server: ', response);
      },
      error : function(jqXHR, textStatus, errorThrown) {
          console.log("The following error occured: " + textStatus, errorThrown);
      },
      complete : function() {
          console.log("Venue Patch Ran");
      }
  });
  }

  // --> METHODS FOR NAVIGATING THE AUDIO IN THE PLAYER BAR <-- //

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

    fetch("http://localhost:4000/episode/29314799")
    .then(res => res.json())
    .then(
      (result) => {
          let { title, created_at, description, duration, enclosure_url, image_url: episode_image_url, show: {name: show_title} } = result.episode;
          
          var stream = new Howl({
            src: [enclosure_url],
            ext: ['mp3'],
            auto: false,
            html5: true
          });
          
          this.setState({
            show_title: show_title,
            episode_title: title,
            episode_image: episode_image_url,
            description: description,
            audio_link: enclosure_url,
            audio: stream,
            date_published: created_at,
            duration: duration
          });
      }, (error) => {
        console.log('error: ', error); 
      }
    )
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
          date_published={this.state.date_published}
          duration={this.state.duration}
          save={this.save}
          editEpisodeTitle={this.editEpisodeTitle}
          editEpisodeDescription={this.editEpisodeDescription}
          editImage={this.editImage}
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


