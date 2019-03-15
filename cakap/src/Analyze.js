import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Diff = require('diff');
const difflib = require('difflib');
 
class Analyze extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.location.state);
        this.diff = Diff.diffWords(this.props.location.state.text, this.props.location.state.par, true);
        this.score = new difflib.SequenceMatcher(null, this.props.location.state.text, this.props.location.state.par).ratio();
        this.score = Math.floor(this.score*100);

        if (this.score >= 70) {
            this.score_text = "Your clarity in speaking is good. You can convey your messages clearly without any problems. Good job!"
        } else {
            this.score_text = "Your clarity in speaking is low. You need to convey your messages clearly. Keep practicing!"
        }

        this.pacing = Math.floor((Number(this.props.location.state.time) / Number(this.props.location.state.elapsed)) * 100);

        if (this.pacing > 100) {
            this.pacing_text = "You need to speak slower. It appears that your pacing is too fast. It can hurt your messages and overall performance. Keep practicing!"
        } else if (this.pacing <= 100 && this.pacing >= 70) {
            this.pacing_text = "Your pacing is very good. Good job! Keep it up! Speaking english is not that hard right?"
        } else {
            this.pacing_text = "You need to speak faster. It appears that your pacing is too slow. It can hurt your messages and overall performance. Keep practicing!"
        }
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
                                    <h3 class="analyze">{this.score}</h3>
                                </div>
                            </div>

                            <div class="analyze-text">
                                <h1>Clarity</h1>
                                <p>{this.score_text}</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="analyze-container">
                                <div class="circle">
                                    <h3 class="analyze">{this.pacing}</h3>
                                </div>
                            </div>

                            <div class="analyze-text">
                                <h1>Pacing</h1>
                                <p>{this.pacing_text}</p>
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