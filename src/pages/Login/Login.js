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
        email: this.state.Id,
        password: this.state.Pw,
        //phone: '010326445555',
        //name: 'anna',
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));*/
  };

  handleIdInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  changeButton = () => {
    const { id, pw } = this.state;
    id.includes('@') && pw.length >= 8
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
  };
  render() {
    return (
      <div className="outBox">
        <button class="close">X</button>
        <h1>LOGIN</h1>
        <div class="infoContainer">
          <input
            Class="myInfo"
            onchage={this.handleIdInput}
            onKeyUp={this.changeButton}
            type="text"
            placeholder="아이디"
            name="id"
          ></input>
        </div>
        <div className="numContainer">
          <input
            onchange={this.handleIdInput}
            onKeyUp={this.changeButton}
            class="secretNumber"
            type="password"
            placeholder="비밀번호"
            name="pw"
          ></input>
        </div>
        <span class="searchBox">
          <a href=" # ">아이디 찾기</a>
          <span class="slash">/</span>
          <a href=" # "> 비밀번호 찾기</a>
        </span>
        <span className="saveBtn">아이디 저장</span>

        <button
          className={`loginBtn ${this.state.isActive ? 'Active' : 'Disabled'}`}
          onClick={this.goTOMain}
        >
          LOGIN
        </button>

        <button class="signInBtn"> SIGN IN </button>
      </div>
    );
  }
}

export default Login;
