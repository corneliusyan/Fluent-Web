import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import sound from './assets/sound/sound.mp3';
//import silence from './assets/sound/silence.mp3';
import calling from './assets/img/call.gif';
import man from './assets/img/man.png';

class Call extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playSound: false,
    };
    // this.playSound = this.playSound.bind(this);
    // this.stopSound = this.stopSound.bind(this);

  }

  // playSound() {
  //   if(!this.state.playSound){
  //       this.setState({
  //           playSound: true,
  //       }, function(){
  //         var audioElement = document.getElementById('beep');
  //         audioElement.setAttribute("preload", "auto");
  //         audioElement.autobuffer = true;
  //         audioElement.load();
  //         audioElement.play();
  //       });
  //   }
  // }
    
  // stopSound() {
  //   if(this.state.playSound){
  //       this.setState({
  //           playSound: false,
  //       }, function(){
  //           var audioElement = document.getElementById('beep');
  //           audioElement.pause();
  //       });
  //   }
  // }

  render() {
    return (
      <div className="main-container">
        <div className="sidebar">
            <div className="sidebar-container" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingTop: 130}}>
                <h1>Cadbury Carl</h1>
                <img style={{width: 170, paddingTop: 10}} alt="boy" src={man}/>
                <p>Enjoy your conversation!</p>
            </div>
        </div>
        <iframe src={sound} title="sound-speak" allow="autoplay" id="audio" style={{display: 'none'}}></iframe>
        {/* <audio id="beep">
          <source src={sound} type="audio/mp3" autoPlay />
        </audio>    */}
        <div className="main-column main-column-call" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <div className="main-col-container-practice" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingTop: -20}}>
            <div style={{textAlign: 'center'}}><h1>Calling</h1></div>
            <NavLink to="/feedback">
              <div style={{textAlign: 'center'}}>
                <img src={calling} alt="hang-phone" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Call;