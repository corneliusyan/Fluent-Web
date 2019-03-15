import React, { Component } from "react";
import earth from './assets/img/earth.png';
import finance from './assets/img/finance.png';
import food from './assets/img/food.png';
import free from './assets/img/free.png';
import idea from './assets/img/idea.png';
import internet from './assets/img/internet.png';
import politic from './assets/img/politic.png';
import religion from './assets/img/religion.png';
import science from './assets/img/science.png';
import travelling from './assets/img/travelling.png';

class Card extends Component{
  render(){
    var cardStyle = {
      width: 207,
      height: 315,
      backgroundColor: this.props.bgcolor,
      display: 'flex',  
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
    };

    var imgStyle = {
      flex: 2,
      width: 150,
    };

    var textStyle = {
      margin: 10,
      lineHeight: 1.8,
      flex: 1,
    }

    return(
      <div className="card-small" style={cardStyle}>
        <div style={{flex: 1}}></div>
        <img style={imgStyle} src={this.props.imgsource}/>
        <div style={{flex: 1}}></div>
        <h3 style={textStyle}>{this.props.header}</h3>
      </div>
    );
  }
}

class Speak extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="sidebar">
            <div className="sidebar-container">
                <h1>Speak</h1>
                <div style={{marginLeft: -25}}><Card bgcolor ="#FFF" imgsource={free} header="Free Talking" /></div>
            </div>
        </div>

        <div className="main-column">
            <div className="main-col-container">
                <div className="row-container">
                  <Card bgcolor ="#d1faff" imgsource={earth} header="Earth" />
                  <Card bgcolor ="#d7b49e" imgsource={finance} header="Finance" />
                  <Card bgcolor ="#57a773" imgsource={food} header="Food" />
                </div>
                <div className="row-container">
                  <Card bgcolor ="#d9cfc1" imgsource={internet} header="Internet" />
                  <Card bgcolor ="#c4b2bc" imgsource={politic} header="Politic" />
                  <Card bgcolor ="#a29587" imgsource={religion} header="Religion" />
                </div>
                <div className="row-container">
                  <Card bgcolor ="#d4f4dd" imgsource={science} header="Science" />
                  <Card bgcolor ="#b8d5b8" imgsource={travelling} header="Travelling" />
                  <Card bgcolor ="#eee3ab" imgsource={idea} header="Idea" />
                </div>
            </div>
        </div>
      </div>
    );
  }
}
 
export default Speak;