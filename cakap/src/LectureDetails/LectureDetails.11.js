import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import logo from '../assets/img/mic.png';

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
      text: 'Just like students, working professionals also wait for vacations. However, they are not blessed with as many holidays. Working people keep an eye on the long weekends. As the calendar for the New Year is out, everyone begins spotting the long weekends that fall during that year. Working professionals often go for outings with their family and friends during this time. Many also indulge in team outings with their colleagues. There are a number of working professionals who relocate to different places to seek good opportunities. For such people, vacations mean going home to meet their family. They are immensely excited about the vacations and eagerly await the same. End of the vacation time and parting with their family is quite difficult for them. Vacations for some working professionals are also a time to take rest to get back to work with fresh mind. Some professionals even take this opportunity to hone their professional skills by taking short term courses. These days there are several online courses that can be enrolled to instantly. Many professionals go for such courses. For working mothers, vacations mean spending quality time with their children.',
      time: 100,
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
                          <img src={logo} alt="Lesson 1" id='microphone-btn' style={button} onClick={this.toggleListen} class="pointer"/>
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