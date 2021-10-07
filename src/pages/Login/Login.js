import React from 'react';
import './Login.scss';
//import './variable.scss';
class Login extends React.Component {
  constructor() {
    super();
    this.state = { id: '', pw: '', isActive: false };
  }

  goTOMain = () => {
    this.props.history.push('/');
    /* fetch('http://10.58.1.9:8000/users/signin/', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));*/
  };

  goToSignin = () => {
    this.props.history.push('/signin');
  };

  handleIdInput = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  changeButton = () => {
    const { id, pw } = this.state;
    id.includes('@') && pw.length >= 8
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
  };

  render() {
    console.log(this.state);
    return (
      <div className="outBox">
        <button className="close">X</button>
        <h1>LOGIN</h1>
        <div className="infoContainer">
          <input
            className="myInfo"
            onChange={this.handleIdInput}
            onKeyUp={this.changeButton}
            type="text"
            name="id"
            placeholder="아이디"
          />
        </div>
        <div className="numContainer">
          <input
            onChange={this.handleIdInput}
            onKeyUp={this.changeButton}
            className="secretNumber"
            type="password"
            name="pw"
            placeholder="비밀번호"
          />
        </div>
        <span className="searchBox">
          <a href="">아이디 찾기</a>
          <span className="slash">/</span>
          <a href=""> 비밀번호 찾기</a>
        </span>
        <span className="saveBtn">아이디 저장</span>

        <button
          className={`loginBtn ${this.state.isActive ? 'Active' : 'Disabled'}`}
          onClick={this.goTOMain}
        >
          LOGIN
        </button>

        <button className="signInBtn">SIGN IN</button>
      </div>
    );
  }
}

export default Login;
