import React from 'react';
import './Signin.scss';
//import './variable.scss';
class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      user_id: '',
      password: '',
      email: '',
      pwCheck: '',
      usableId: false,
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

  idCheck = e => {
    e.preventDefault();
    const { usableId } = this.state;
  };

  render() {
    return (
      <div className="outContainer">
        <button class="closeBtn">X</button>
        <h1>SIGNIN</h1>
        <div className="nameBox">
          <input
            className="nameInfo"
            placeholder="이름"
            onChange={this.handleInput}
            name="name"
          />
        </div>
        <div className="idBox">
          <input
            className="idInfo"
            placeholder="아이디"
            onChange={this.handleInput}
            name="id"
          />
        </div>
        <button className="sameCheck" onclick={this.checkId}>
          중복확인
        </button>
        <div className="numBox">
          <input
            className="secretNum"
            type="password"
            placeholder="비밀번호"
            onChange={this.handleInput}
            name="pw"
          />
        </div>
        <div className="checkPw">
          <input
            className="checkNumber"
            type="password"
            placeholder="비밀번호 확인"
            name="pwcheck"
          />
        </div>
        <div className="emailBox">
          <inputgit
            className="emailInfo"
            placeholder="이메일"
            onChange={this.handleInput}
            name="email"
          />
        </div>
        <input type="checkbox" className="agreeCheck" />
        <p>회원약관에 동의하시면 체크해주세요.</p>

        <button className="join" onClick={this.goToMain}>
          가입하기
        </button>
      </div>
    );
  }
}

export default Signin;
