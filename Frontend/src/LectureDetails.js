import React, { Component } from "react"
import logo from './assets/img/logo.png';

//------------------------SPEECH RECOGNITION-----------------------------

const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'

//------------------------COMPONENT-----------------------------

class LectureDetails extends Component {

  constructor() {
    super()
    this.state = {
      listening: false,
      text: 'The summer vacation for school students is a long break from school during the hot months of May and June, that may last anything between a month and a half and two. The temperatures touch forty degrees Celsius and more in almost the whole of India, and schools give their students a long summer vacation. Students thus save themselves from venturing out in and exposing themselves to the summer sun. Students, along with their family and friends, spend their time usefully doing what they enjoy the most. They go out in the cool hours of the day, in the mornings and evenings. Students enjoy their holidays learning new things, developing hobbies, travelling to interesting places, and meeting their friends and relatives. After their summer vacations students get back to school refreshed and rejuvenated, and ready for the next semester or term at school.'
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen() {

    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
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
      document.getElementById('spoken').innerHTML = interimTranscript
      //document.getElementById('final').innerHTML = finalTranscript

    //-------------------------COMMANDS------------------------------------

      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening'){
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          //document.getElementById('final').innerHTML = finalText
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
                            <p id='spoken' style={spoken}></p>
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
    backgroundColor: '#f9eeed',
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
  },
  spoken: {
      margin: '0px',
      padding: '0px'
  }
}

const { container, button, buttonContainer, paragraph, textContainer, interim, spoken } = styles