import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'

import SpeakerGray from './assets/img/speaker-gray.png';
import SpeakerBlue from './assets/img/speaker-blue.png';

const Diff = require('diff');
const difflib = require('difflib');

const API_BASE_URL = 'http://165.22.105.219:8001'
const API_ANALYZE_URL = API_BASE_URL + '/analyze/'

var source_text;

class Analyze extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.location.state);
        // this.diff = Diff.diffWords(this.props.location.state.text, this.props.location.state.par, true);
        // this.score = new difflib.SequenceMatcher(null, this.props.location.state.text, this.props.location.state.par).ratio();
        // this.score = Math.floor(this.score*100);

        const script = document.createElement("script");

        var err = false
        this.data = this.props.location.state
        
        try {
            window.source_text = this.data.text
            let payload = {
                source_text: this.data.text,
                input_text: this.data.par,
                input_time: this.data.elapsed,
                expected_time: this.data.time
            }
            const self = this
            axios.post(API_ANALYZE_URL, payload)
            .then(function (response) {
                console.log(response.data);
                window.score = response.data.clarity * 100;
                window.pacing = response.data.pace * 100;
                if (window.score >= 70) {
                    window.score_text = "Your clarity in speaking is good. You can convey your messages clearly without any problems. Good job!"
                } else {
                    window.score_text = "Your clarity in speaking is low. You need to convey your messages clearly. Keep practicing!"
                }
    
                // this.pacing = Math.floor((Number(this.props.location.state.time) / Number(this.props.location.state.elapsed)) * 100);
    
                if (window.pacing > 100) {
                    window.pacing_text = "You need to speak slower. It appears that your pacing is too fast. It can hurt your messages and overall performance. Keep practicing!"
                } else if (window.pacing <= 100 && window.pacing >= 70) {
                    window.pacing_text = "Your pacing is very good. Good job! Keep it up! Speaking english is not that hard right?"
                } else {
                    window.pacing_text = "You need to speak faster. It appears that your pacing is too slow. It can hurt your messages and overall performance. Keep practicing!"
                }
    
                self.setState({
                    score: window.score,
                    score_text: window.score_text,
                    pacing: window.pacing,
                    pacing_text: window.pacing_text,
                    result: response.data.result,
                    wrong_words: response.data.wrong_words
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        } catch(e) {
            err = true
        }

        if (err) {
            this.message = "You haven't recorded anything. Try choosing a lecture and start practicing!"
        } else {
            this.message = "Keep going! You're doing great! Here's your result details."
        }

    }

    getWrongWords = wrong_words => {
        let words = []
        let SpeakerWidth = {
            width: 15
        }
        for (let i = 0; i < wrong_words.length; i++) {
            words.push(<li key={i}>{wrong_words[i]} <img src={SpeakerGray} onClick={() => window.responsiveVoice.speak(wrong_words[i])} class="pointer" style={SpeakerWidth} /></li>)
        }
        return words
    }

    parseResults = text => {
        let result = []
        let start_pos = text.indexOf('*') + 1
        let end_pos = 0
        if (start_pos == 0) {
            result.push(text)
        } else {
            if (start_pos > 1) {
                result.push(text.substring(0, start_pos - 1))
            }
            while (start_pos > 0) {
                end_pos = text.indexOf('*', start_pos)
                result.push(<font color="red" key={start_pos}><i><b>{text.substring(start_pos, end_pos)}</b></i></font>)

                start_pos = text.indexOf('*', end_pos + 1) + 1
                if (start_pos == 0) {
                    if (text[end_pos] == '*') {
                        end_pos++
                    }
                    result.push(text.substring(end_pos, text.length))
                } else {
                    result.push(text.substring(end_pos + 1, start_pos - 1))
                }
            }
        }
        return <p>{result}</p>
    }

    render() {
        let SpeakerWidth = {
            width: 25
        }

        return (
            <div className="main-container">
                <div className="sidebar">

                    <div className="sidebar-container">
                        <h1>Result</h1>

                        <p>{this.message}</p>

                    </div>

                </div>

                <div className="main-column">

                    <div className="main-col-container">

                        <div className="card">
                            <div className="analyze-container">
                                <div className="circle">
                                    {
                                        this.state &&
                                        <h3 className="analyze">{this.state.score}</h3>
                                    }
                                </div>
                            </div>

                            <div className="analyze-text">
                                <h1>Clarity</h1>
                                {
                                    this.state && <p>{this.state.score_text}</p>
                                }

                            </div>
                        </div>

                        <div className="card">
                            <div className="analyze-container">
                                <div className="circle">
                                    {
                                        this.state && <h3 className="analyze">{this.state.pacing}</h3>
                                    }

                                </div>
                            </div>

                            <div className="analyze-text">
                                <h1>Pacing</h1>
                                {
                                    this.state && <p>{this.state.pacing_text}</p>
                                }

                            </div>
                        </div>

                        <div className="card">
                            <div className="analyze-text">
                                <h1>Correct Pronunciation <img src={SpeakerBlue} onClick={() => window.responsiveVoice.speak(window.source_text)} className="pointer" style={SpeakerWidth} /></h1>
                                {
                                    this.state && this.parseResults(this.state.result)
                                }
                            </div>
                        </div>

                        <div className="card">
                            <div className="analyze-text">
                                <h1>Wrong Words</h1>
                                {
                                    this.state && <p>{this.getWrongWords(this.state.wrong_words)}</p>
                                }
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Analyze;