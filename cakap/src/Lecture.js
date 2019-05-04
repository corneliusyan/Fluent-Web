import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ask from './assets/img/ask.png';
import communication from './assets/img/communication.png';
import health from './assets/img/health.png';
import sport from './assets/img/sport.png';
import hierarchy from './assets/img/hierarchy.png';
 
class Card extends Component {
    render(){
        return(
            <NavLink to={`/detail/${this.props.lesson}/${this.props.id}`}>
                <div className="card-small">
                    <div className="card-small-image-container">
                        <img src={this.props.imgsrc} className="card-small-image" alt="lecture"/>
                    </div>
                    <div className="card-small-text-container">
                        <h3>{this.props.header}</h3>
                    </div>
                </div>
            </NavLink>
        );
    }
}

class Lecture extends Component {
    constructor(props) {
        super(props);

        this.index = this.props.match.params.lesson_id;
        this.data = ['English - Semester 2', 'IENG07 Intermediate English/Trades Course', 'FENG03 Fundamental English Course']

    }

    render() {
        return (
        <div className="main-container">
            <div className="sidebar">
                
                <div className="sidebar-container">
                    <img className="lesson-title-img" src={ask} alt="Getting to Know"/>
                    <h1>{this.data[this.index-1]}</h1>

                    <p>This course focuses on learning sound and letter patterns; developing sight, functional and personal reading vocabulary.</p>

                </div>

            </div>

            <div className="main-column">
                <div className="main-col-container">
                    <div className="row-container">
                        <Card imgsrc={communication} header="Lecture 1" id='1' lesson={this.props.match.params.lesson_id}/>
                        <Card imgsrc={health} header="Lecture 2" id='2' lesson={this.props.match.params.lesson_id}/>
                    </div>

                    <div className="row-container">
                        <Card imgsrc={sport} header="Lecture 3" id='3' lesson={this.props.match.params.lesson_id}/>
                        <Card imgsrc={hierarchy} header="Lecture 4" id='4' lesson={this.props.match.params.lesson_id}/>
                    </div>

                </div>

            </div>
        </div>
        );
    }
}

export default Lecture;