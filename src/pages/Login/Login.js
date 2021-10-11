import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { id: '', pw: '', isActive: false, isModalOpen: false };
  }

  clickLogin = () => {
    fetch('http://10.58.2.115:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        account: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.TOKEN) {
          console.log('로그인 성공');
          localStorage.setItem('token', response.TOKEN);
          this.props.history.push('/');
        } else {
          alert('아이디 또는 비밀번호가 다릅니다.');
        }
      })
      .catch(err => {
        alert('로그인 실패');
        console.error(err);
      });
  };

  goToSignin = () => {
    this.props.history.push('/signin');
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
        <button className="close"></button>
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
          <a href=" #">아이디 찾기</a>
          <span className="slash">/</span>
          <a href=" #"> 비밀번호 찾기</a>
        </span>
        <input type="checkbox" id="saveBtn" />
        <label for="saveBtn" className>
          아이디 저장
        </label>

        <button
          className={`loginBtn ${this.state.isActive ? 'active' : 'disabled'}`}
          onClick={this.clickLogin}
        >
          LOGIN
        </button>
        <button className="signInBtn" onClick={this.goToSignin}>
          SIGN IN
        </button>
      </div>
    );
  }
}

export default Login;
