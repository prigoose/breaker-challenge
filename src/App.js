import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <a href="/">
            <img src="https://www.breaker.audio/assets/breaker-logo-8b35ee4ae36d80d707117bb718bf6ba5edb88e2118d28b9f90a84c2e2ed8636f.svg" alt="Breaker logo" width="100" height="100"></img>
            </a>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <img className="episode-image" src='https://breaker-cache.s3.amazonaws.com/images/873c449342fae6bc3414d59f01f9ce79/0x0/91cb53ae0d5dbb379b9dffecf0a772593891d0d09bbe6d90ee746edbdb79e3ec75584f2ceb8260e9f675a90c05419b9b99842a76905b686f0f51c1a9d3e227ab.jpg' alt="breaker logo" height="300" width="300"/>
                <p className="show-title">The Tim Ferriss Show</p>
              </div>
              <div className="col-sm">
                <p className="episode-title">Episode 2: Josh Waitzkin</p>
                <p className="episode-description">Josh Waitzkin was the basis for the book and movie "Searching for Bobby Fischer." Considered a chess prodigy, he has learning strategies that can be applied to anything, including his other loves of Brazilian Jiu-Jitsu (he's a black belt under Marcelo Garcia) and Tai Chi Push Hands (he's a world champion). Now, he spends his time coaching the world's top performers, whether Mark Messier, Cal Ripken Jr., or hedgefund managers. This episode is DEEP in the best way possible. And for a change from Episode 1, I'm totally sober.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="player">
          <img className="episode-image" src='https://breaker-cache.s3.amazonaws.com/images/873c449342fae6bc3414d59f01f9ce79/0x0/91cb53ae0d5dbb379b9dffecf0a772593891d0d09bbe6d90ee746edbdb79e3ec75584f2ceb8260e9f675a90c05419b9b99842a76905b686f0f51c1a9d3e227ab.jpg' alt="breaker logo" height="100" width="100"/>
          <div className="now-playing">
            <button id="skip-backward-5">Skip backward 5</button>
            <button id="play">Play</button>
            <button id="pause">Pause</button>
            <button id="skip-forward-5">Skip forward 5</button>
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;
