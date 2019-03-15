import React, { Component } from "react";
import girl from './assets/img/girl.png';
import crown from './assets/img/crown.png';
import trophy from './assets/img/trophy.png';
import heart from './assets/img/heart.png';
import tick from './assets/img/tick.png';
import blocked from './assets/img/blocked.png';
import unlocked from './assets/img/unlocked.png';
import user from './assets/img/user.png';
import favorite from './assets/img/favorite.png';
import start from './assets/img/start.png';
import arrow from './assets/img/right-arrow.png';

class ToggleBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    this.setState(oldState => ({ isOpened: !oldState.isOpened }));
  }

  render() {
    const { title, children, colsrc } = this.props;
    const { isOpened } = this.state;
    return (
      <div>
        <div onClick={this.toggleBox}>
          <Collapse imgsrc={colsrc} text={title}/>
        </div>
        {isOpened && children && (
          <div className="">
            {children}
          </div>
        )}
      </div>
    );
  }
}
class Collapse extends Component {
  render(){
    var blockStyle = {
      display:'flex',
      backgroundColor: 'white',
      color: 'black',
      width: 700,
    };

    var imgStyle = {
      height: 30,
      margin: 5,
    };

    var circleStyle = {
      background: '#6a68fa',
      width: 40,
      height: 40,
      borderRadius: 20,
    };
    return(
      <div className="profile-box" style={blockStyle}>
        <div style={{flex:'9', display:'flex'}}>
          <div style={{flex: 1}}><div style={circleStyle}><img style={imgStyle} src={this.props.imgsrc} /></div></div>
          <h4 style={{flex: 6, marginTop: 12}}>{this.props.text}</h4>
        </div>
        <div style={{flex:'1'}}>
          <img style={imgStyle} src={arrow} />
        </div>
      </div>
    );
  }
}

class Colllapse extends Component {
  render(){
    var blockStyle = {
      display:'flex',
      backgroundColor: 'white',
      color: 'black',
      width: 700,
    };

    var imgStyle = {
      height: 30,
      margin: 5,
    };

    var circleStyle = {
      background: '#6a68fa',
      width: 40,
      height: 40,
      borderRadius: 20,
    };
    return(
      <div className="profile-box" style={blockStyle}>
        <div style={{flex:'9', display:'flex'}}>
          <div style={{flex: 1}}><div style={circleStyle}><img style={imgStyle} src={this.props.imgsrc} /></div></div>
          <h4 style={{flex: 6, marginTop: 12}}>{this.props.text}</h4>
        </div>
        <div style={{flex:'1'}}>
          <img style={imgStyle} src={arrow} />
        </div>
      </div>
    );
  }
}

class Box extends Component {
  render(){
    var boxStyle = {
      color: 'gray',
      paddingBottom: 10,
    }
    return(
      <div style={boxStyle}>
        <h2 style={{marginBottom: 10}}>{this.props.header}</h2>
        {this.props.children}
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    var achievementStyle = {
      width: 170,
      display: 'flex',  
      justifyContent: 'space-between', 
      alignItems: 'center',
    };
    return (
      <div className="main-container">
        <div className="sidebar">
            <div className="sidebar-container">
                <h1 style={{paddingBottom: 20}}>Rachel Adriana</h1>
                <img style={{paddingBottom: 20, width: 170}} src={girl}/>
                <h3 style={{paddingBottom: 20}}>390.230 Points</h3>
                <div style={achievementStyle}>
                  <img style={{width: 50}} src={crown} />
                  <img style={{width: 50}} src={trophy} />
                  <img style={{width: 50}} src={start} />
                </div>

            </div>
        </div> 

        <div className="main-column">
            <div className="main-col-container">
              <Box header="General">
              <ToggleBox title="Favorites" colsrc={heart}>
                <div>Some content</div>
              </ToggleBox>
                <Colllapse imgsrc={heart} text="Favorites"/>
                <Colllapse imgsrc={user} text="Accounts"/>
                <Colllapse imgsrc={favorite} text="Achievements"/>
              </Box>
              <Box header="Settings">
                <Colllapse imgsrc={unlocked} text="Edit Login Details"/>
                <Colllapse imgsrc={tick} text="Update Interests"/>
                <Colllapse imgsrc={blocked} text="Blocked Users"/>
              </Box>
              
            </div>
        </div>
      </div>
    );
  }
}
 
export default Profile;