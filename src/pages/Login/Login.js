import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      account: '',
      password: '',
      isSignVisible: false,
    };
  }

  clickLogin = () => {
    fetch('http://10.58.2.208:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        account: this.state.account,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.message[2]) {
          localStorage.setItem('token', response.message[2]);
          this.props.history.push('/');
          alert(`${this.state.account}님 환영합니다!`);
          window.location.reload();
        } else {
          alert('아이디 또는 비밀번호가 다릅니다.');
        }
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
      <div className={`Login ${this.props.isVisible ? ' ' : 'X'}`}>
        <div className="outBox" onClick={e => e.stopPropagation()}>
          <button className="close" onClick={this.props.handleLog} />
          <h1>LOGIN</h1>
          <div className="infoContainer">
            <input
              className="myInfo"
              onChange={this.handleInput}
              type="text"
              name="account"
              placeholder="아이디"
            />
          </div>
          <div className="numContainer">
            <input
              onChange={this.handleInput}
              className="secretNumber"
              type="password"
              name="password"
              placeholder="비밀번호 ( 8자 이상 )"
            />
          </div>

          {/*<input type="checkbox" className="saveBtn" />
         <label>아이디 저장</label>*/}

          <button
            className={`loginBtn ${isvalid ? '' : 'normalBtn'}`}
            disabled={!isvalid}
            onClick={this.clickLogin}
          >
            LOGIN
          </button>
          <button
            className="signInBtn"
            name="signin"
            onClick={this.props.handleLog}
          >
            SIGN UP
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
