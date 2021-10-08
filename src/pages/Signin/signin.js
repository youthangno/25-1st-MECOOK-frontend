import React from 'react';
import './Signin.scss';
//import './variable.scss';
class Signin extends React.Component {
  constructor() {
    super();
    this.state = { name: '', id: '', pw: '', email: '' };
  }
  goToMain = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="outContainer">
        <button class="closeBtn">X</button>
        <h1>SIGNIN</h1>
        <div className="nameBox">
          <input className="nameInfo" placeholder="이름" />
        </div>
        <div class="idBox">
          <input Class="idInfo" placeholder="아이디" />
        </div>
        <div className="numBox">
          <input class="secretNum" type="password" placeholder="비밀번호" />
        </div>
        <div className="emailBox">
          <input className="emailInfo" placeholder="이메일" />
        </div>
        <input type="checkbox" className="agreeCheck" /> 동의
        <button class="join" onclick={this.goToMain}>
          가입하기
        </button>
      </div>
    );
  }
}

export default Signin;
