import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { account: '', password: '' };
  }

  clickLogin = () => {
    fetch('http://10.58.2.115:8000/user/login');
  };

  clickLogin = () => {
    fetch('http://10.58.2.115:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        account: this.state.account,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.TOKEN) {
          alert('로그인 성공');
          localStorage.setItem('token', response.TOKEN);
          this.props.history.push('/');
        } else {
          alert('아이디 또는 비밀번호가 다릅니다.');
        }
        console.log(this.state);
      });
  };

  goToSignin = () => {
    this.props.history.push('/signin');
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const isvalid = this.state.account && this.state.password.length >= 8;

    return (
      <div className="outBox">
        <button className="close" />
        <h1>LOGIN</h1>
        <div className="infoContainer">
          <input
            className="myInfo"
            onChange={this.handleInput}
            type="text"
            name="id"
            placeholder="아이디"
          />
        </div>
        <div className="numContainer">
          <input
            onChange={this.handleInput}
            className="secretNumber"
            type="password"
            name="password"
            placeholder="비밀번호(8자이상)"
          />
        </div>

        <button
          className={`loginBtn ${isvalid ? '' : 'normalBtn'}`}
          disabled={!isvalid}
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
