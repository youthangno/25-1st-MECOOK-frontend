import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isSignVisible: false,
    };
  }

  // clickLogin = () => {
  //   fetch('http://10.58.2.115:8000/user/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       account: this.state.id,
  //       password: this.state.pw,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       if (response.TOKEN) {
  //         alert(`${this.state.id}님 환영합니다!`);
  //         localStorage.setItem('token', response.TOKEN);
  //         this.props.history.push('/');
  //       } else {
  //         alert('아이디 또는 비밀번호가 다릅니다.');
  //       }
  //     });
  // };

  goToSignin = () => {
    this.props.history.push('/signin');
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state);
    const isvalid = this.state.id.includes('@') && this.state.pw.length >= 8;
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
              name="id"
              placeholder="아이디 ( @포함 )"
            />
          </div>
          <div className="numContainer">
            <input
              onChange={this.handleInput}
              className="secretNumber"
              type="password"
              name="pw"
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
