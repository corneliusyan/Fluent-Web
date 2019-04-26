import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import mic from '../assets/img/mic.png';
import rec from '../assets/img/rec-on.png';

//------------------------SPEECH RECOGNITION-----------------------------

const recognition = new window.webkitSpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'

//------------------------COMPONENT-----------------------------

class LectureDetails extends Component {

  constructor() {
    super()
    this.startTime = 0;
    this.state = {
      listening: false,
      text: 'I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
      time: 12,
      par: '',
      elapsed: 0,
      record: mic,
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
    this.setState({ record: rec});
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen() {

    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      this.start()
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

        <div class="main-container">
            <div class="sidebar">
                
                <div class="sidebar-container">
                    <h1>Lecture</h1>

                    <p>Click on the microphone button when you are ready to start recording. Click on it again when you are done to analyze your result.</p>

                </div>

            </div>

            <div class="main-column">
                
                <div class="main-col-container">
                    
                    <div style={container}>
                        <div style={buttonContainer}>
                          <img src={this.state.record} alt="Lesson 1" id='microphone-btn' style={button} onClick={this.toggleListen} class="pointer"/>
                        </div>

                        <div style={textContainer}>
                            <p style={paragraph}>{this.state.text}</p>
                        </div>
                    </div>

                    <div style={container}>
                        <div id='interim' style={interim}>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
  }
}

export default LectureDetails


//-------------------------CSS------------------------------------

const styles = {
  container: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    borderRadius: '5px',
    width: '800px',
    height: 'auto',
    backgroundColor: '#e8f0f0',
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
    width: '100%',
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