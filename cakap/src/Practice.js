import React, { Component } from "react";
import ask from './assets/img/ask.png';

import { withRouter } from 'react-router-dom'
import logo from './assets/img/logo.png';

//------------------------SPEECH RECOGNITION-----------------------------

const recognition = new window.webkitSpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'
 
class Card extends Component {
    render(){
        return(
            <div className="card-small">
                <div className="card-small-image-container">
                    <img src={this.props.imgsrc} className="card-small-image" alt="lecture"/>
                </div>
                <div className="card-small-text-container">
                    <h3>{this.props.header}</h3>
                </div>
            </div>
        );
    }
}

class Practice extends Component {

    constructor() {
        super()
        this.startTime = 0;
        this.state = {
          listening: false,
          text: '',
          time: 0,
          par: '',
          elapsed: 0,
        }
        this.toggleListen = this.toggleListen.bind(this)
        this.handleListen = this.handleListen.bind(this)
      }
    
      start() {
        this.startTime = new Date();
      }
      
      end() {
        var endTime = new Date();
        var timeDiff = endTime - this.startTime; //in ms
        // strip the ms
        timeDiff /= 1000;
      
        // get seconds 
        var seconds = Math.round(timeDiff);
        return seconds;
      }
    
      toggleListen() {
        this.setState({
          listening: !this.state.listening
        }, this.handleListen)
      }

      handleChange(e){
        this.setState({text: e.target.value})
      }
    
      handleListen() {
    
        console.log('listening?', this.state.listening)
    
        if (this.state.listening) {
          this.start()
          var timer = (this.state.text.split(" ").length)/2;
          this.setState({
              time: timer
          })

          recognition.start()
          recognition.onend = () => {
            console.log("...continue listening...")
            recognition.start()
          }
    
        } else {
          var elapsed = this.end()
          recognition.stop()
          recognition.onend = () => {
            console.log("Stopped listening per click")
          }
    
          this.props.history.push({
            pathname: '/analyze',
            state: { par: this.state.par, text: this.state.text, elapsed: elapsed, time: this.state.time }
          })
        }
    
        recognition.onstart = () => {
          console.log("Listening!")
        }
    
        let finalTranscript = ''
        recognition.onresult = event => {
          let interimTranscript = ''
    
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) finalTranscript += transcript + ' ';
            else interimTranscript += transcript;
          }
    
          document.getElementById('interim').innerHTML = '<p>' + interimTranscript + '</p>'
          //document.getElementById('final').innerHTML = finalTranscript
          this.setState({
            par: finalTranscript,
          })
    
        //-------------------------COMMANDS------------------------------------
    
          const transcriptArr = finalTranscript.split(' ')
          const stopCmd = transcriptArr.slice(-3, -1)
          console.log('stopCmd', stopCmd)
    
          if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening'){
            recognition.stop()
            recognition.onend = () => {
              console.log('Stopped listening per command')
              const finalText = transcriptArr.slice(0, -3).join(' ')
              console.log("Finaltext" + finalText)
              //document.getElementById('final').innerHTML = finalText
              this.setState({
                par: finalText,
              })
            }
          }
        }
        
      //-----------------------------------------------------------------------
        
        recognition.onerror = event => {
          console.log("Error occurred in recognition: " + event.error)
        }
    
      }

  render() {
    return (
      <div className="main-container">
        <div className="sidebar">
            
            <div className="sidebar-container">
                <img className="lesson-title-img" src={ask} alt="Getting to Know"/>
                <h1>Practice</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

        </div>

        <div className="main-column">
            <div className="main-col-container">
                
                <div className="textarea-card">
                    <div style={buttonContainer}>
                        <img src={logo} alt="Lesson 1" id='microphone-btn' style={button} onClick={this.toggleListen}/>
                    </div>
                    <textarea rows="4" cols="95" placeholder="Input your text here." onChange={this.handleChange.bind(this)}>
                    </textarea>
                </div>

                <div style={container}>
                    <div id='interim' style={interim}>
                    </div>
                </div>

            </div>

        </div>
    </div>
    );
  }
}

export default Practice;

//-------------------------CSS------------------------------------

const styles = {
    container: {
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
      borderRadius: '5px',
      width: '800px',
      height: 'auto',
      backgroundColor: '#ffffff',
      marginBlockEnd: '30px',
      display: 'block',
      padding: '10px 5px'
    },
    button: {
      left: '45%',
      top: '10%',
      width: '80px',
      height: '80px',
      position: 'relative'
    },
    buttonContainer: {
      height: '80px'
    },
    textContainer: {
      width: '100%'
    },
    paragraph: {
      margin: '5px 30px',
      textAlign: 'justify'
    },
    interim: {
      color: 'gray',
      border: '#ccc 1px solid',
      borderRadius: '5px',
      padding: '1em',
      margin: '1em',
      width: '90%'
    }
  }
  
  const { container, button, buttonContainer, paragraph, textContainer, interim } = styles