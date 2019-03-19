import React, { Component } from 'react';
import signin from './assets/img/signin.jpg';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      isValid: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePass(event) {
    this.setState({pass: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.email == this.props.email && this.state.pass == this.props.pass){
      window.location.href = "http://localhost:3000/#/lesson";
      this.setState({isValid : true});
      event.preventDefault();
    }else{
      alert ('Login Fail');
      event.preventDefault();
    }
  }

  render() {
    return (
      <form className="form-box" onSubmit={this.handleSubmit}>
        <input placeholder="Email" className="input-box" type="text" value={this.state.email} onChange={this.handleChangeEmail} />
        <hr />
        <br/><input placeholder="Password" className="input-box" type="password" value={this.state.pass} onChange={this.handleChangePass} />
        <hr />
        <br/><input className="sign" type="submit" value="sign in" />
      </form>
    );
  }
}

class Login extends Component {  
  constructor(){
    super();
    //document.getElementById('navbar').style.display="none";
  }
  render() {
    
    var sectionStyle = {
      backgroundImage : "url(" + signin + ")",
      backgroundSize: "cover",
      margin: 0,
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
    };

    return (
      <section style={sectionStyle}>
        <div>
          <h1>Sign In</h1>
          <h5>Welcome Back!</h5>
          <h5>Ready to improve your speaking skill?</h5>
          <TextInput email="email" pass="pass" />
        </div>
      </section>
    );
  }
}

export default Login;
