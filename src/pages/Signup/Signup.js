import React from 'react';
import './Signup.scss';
class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      user_id: '',
      password: '',
      email: '',
      pwCheck: '',
    };
  }

  goToMain = () => {
    /*fetch('http://10.58.2.115:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        account: this.state.id,
        password: this.state.pw,
        name: this.state.name,
        email: this.state.email,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
    this.props.history.push('/');*/
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="outContainer">
        <button class="closeBtn"></button>
        <h1>SIGNUP</h1>
        <span className="nameNotice"> 이름 </span>
        <input
          className="nameInfo"
          placeholder="Enter name"
          onChange={this.handleInput}
          name="name"
        />
        <span className="idGuide">아이디</span>
        <input
          className="idInfo"
          placeholder="Enter user-id"
          onChange={this.handleInput}
          name="id"
        />

        <button className="sameCheck" onclick={this.checkId}>
          중복확인
        </button>
        <span className="pwMenu">비밀번호</span>
        <input
          className="secretNum"
          type="password"
          placeholder="Enter password"
          onChange={this.handleInput}
          name="pw"
        />
        <span className="checkPwMenu">비밀번호 확인</span>
        <input
          className="checkNumber"
          type="password"
          placeholder="Confirm password"
          name="pwcheck"
        />
        <span className="emailMenu">이메일</span>
        <input
          className="emailInfo"
          placeholder="Enter e-mail"
          onChange={this.handleInput}
          name="email"
        />

        <input type="checkbox" className="agreeCheck" />
        <p>약관을 모두 읽었으며 동의합니다.</p>

        <button className="join" onClick={this.goToMain}>
          등록
        </button>
      </div>
    );
  }
}

export default Signup;
