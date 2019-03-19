import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'

const Diff = require('diff');
const difflib = require('difflib');


const API_BASE_URL = 'http://localhost:8000'
const API_ANALYZE_URL = API_BASE_URL + '/analyze/'

var score = 0;
var pacing = 0;
var pronunciation = [];

class Analyze extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.location.state);
        // this.diff = Diff.diffWords(this.props.location.state.text, this.props.location.state.par, true);
        // this.score = new difflib.SequenceMatcher(null, this.props.location.state.text, this.props.location.state.par).ratio();
        // this.score = Math.floor(this.score*100);

        this.data = this.props.location.state
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

    }

    getWrongWords = wrong_words => {
        let words = []

        for (let i = 0; i < wrong_words.length; i++) {
            words.push(<li key={i}>{wrong_words[i]}</li>)
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
                console.log(start_pos, end_pos)
                end_pos = text.indexOf('*', start_pos)
                result.push(<font color="red"><i><b>{text.substring(start_pos, end_pos)}</b></i></font>)

                start_pos = text.indexOf('*', end_pos + 1) + 1
                console.log(start_pos, end_pos)
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
        // result.push(text)
        return <p>{result}</p>
    }

    render() {
        return (
            <div class="main-container">
                <div class="sidebar">

                    <div class="sidebar-container">
                        <h1>Result</h1>

                        <p>Keep going! You're doing great! Here's your result details.</p>

                    </div>

                </div>

                <div class="main-column">

                    <div class="main-col-container">

                        <div class="card">
                            <div class="analyze-container">
                                <div class="circle">
                                    {
                                        this.state &&
                                        <h3 class="analyze">{this.state.score}</h3>
                                    }
                                </div>
                            </div>

                            <div class="analyze-text">
                                <h1>Clarity</h1>
                                {
                                    this.state && <p>{this.state.score_text}</p>
                                }

                            </div>
                        </div>

                        <div class="card">
                            <div class="analyze-container">
                                <div class="circle">
                                    {
                                        this.state && <h3 class="analyze">{this.state.pacing}</h3>
                                    }

                                </div>
                            </div>

                            <div class="analyze-text">
                                <h1>Pacing</h1>
                                {
                                    this.state && <p>{this.state.pacing_text}</p>
                                }

                            </div>
                        </div>

                        <div class="card">
                            <div class="analyze-text">
                                <h1>Result</h1>
                                {
                                    this.state && this.parseResults(this.state.result)
                                }
                            </div>
                        </div>

                        <div class="card">
                            <div class="analyze-text">
                                <h1>Wrong Words</h1>
                                {
                                    this.state && <p>{this.getWrongWords(this.state.wrong_words)}</p>
                                }
                            </div>
                        </div>

                        <div class="card">
                            <div class="analyze-container">
                                <div class="circle">
                                    <h3 class="analyze">71</h3>
                                </div>
                            </div>

                            <div class="analyze-text">
                                <h1>Pronunciation</h1>
                                <p>Your pronunciation is moderate. You can always learn to improve it by practicing. Keep up the good work!</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Analyze;