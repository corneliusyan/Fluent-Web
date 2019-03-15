import React, { Component } from "react";
import sound from './assets/sound/sound.mp3';
import calling from './assets/img/call.gif';
import man from './assets/img/man.png';

class Call extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playSound: false,
    };
    this.playSound = this.playSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
    this.playSound();
  }

  playSound() {
    if(!this.state.playSound){
        this.setState({
            playSound: true,
        }, function(){
          var audioElement = document.getElementById('beep');
          audioElement.setAttribute("preload", "auto");
          audioElement.autobuffer = true;
          audioElement.load();
          audioElement.play();
        });
    }
  }
    
  stopSound() {
    if(this.state.playSound){
        this.setState({
            playSound: false,
        }, function(){
            var audioElement = document.getElementById('beep');
            audioElement.pause();
        });
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="sidebar" style={{backgroundColor: '#94c9a9'}}>
            <div className="sidebar-container" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingTop: 80}}>
                <h1>Cadbury Carl</h1>
                <img style={{width: 170, paddingTop: 80}} src={man}/>
            </div>
        </div>
        <audio id="beep">
          <source src={sound} type="audio/mp3" />
        </audio>   
        <div className="main-column main-column-call" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <div className="main-col-container" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingTop: 150}}>
            <div style={{textAlign: 'center'}} onClick={this.playSound}><h1>Calling</h1></div>
            <div style={{textAlign: 'center'}}>
              <img onClick={this.stopSound} src={calling} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Call;