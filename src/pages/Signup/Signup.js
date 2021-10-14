import React from 'react';
import './Signup.scss';
import { withRouter } from 'react-router-dom';
class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      account: '',
      password: '',
      pwCheck: '',
      email: '',
      usableId: false,
      isChecked: false,
    };
  }

  idCheck = e => {
    e.preventDefault();
    const { account } = this.state;
    fetch('http://10.58.2.208:8000/user/signup/check', {
      method: 'POST',
      body: JSON.stringify({
        account: account,
      }),
    }).then(response => {
      console.log(response);
      if (response.status === 201) {
        alert('사용 가능한 아이디 입니다.');
        this.setState({ usableId: true });
      } else if (response.status === 409) {
        alert('이미 사용중인 아이디 입니다.');
      } else {
        alert('사용 불가한 아이디입니다');
      }
    });
  };

  clickSignup = e => {
    e.preventDefault();
    const { name, account, password, pwCheck, email, usableId, isChecked } =
      this.state;
    const ruleEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    const rulePw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}/;

    if (usableId !== true) {
      alert('아이디 중복확인을 해주세요');
    } else if (!(name && account && password && pwCheck && email)) {
      alert('필수 항목을 작성해주세요');
    } else if (!rulePw.test(password)) {
      alert('비밀번호를 다시 입력해주세요');
    } else if (password !== pwCheck) {
      alert('비밀번호가 일치하지 않습니다.');
    } else if (!ruleEmail.test(email)) {
      alert('이메일을 다시 입력해주세요.');
    } else if (isChecked === false) {
      alert('개인정보 약관에 동의해주세요 ');
    } else {
      fetch('http://10.58.2.208:8000/user/signup', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          account: this.state.account,
          password: this.state.password,
          pwCheck: this.state.pwCheck,
          email: this.state.email,
        }),
      }).then(res => {
        if (res.status === 400) {
          alert('입력한 정보를 다시 한 번 확인해주세요.');
        } else {
          alert(`${this.state.name}님 가입을 환영합니다.`);
          this.props.history.push('/');
          window.location.reload();
        }
      });
    }
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheck = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    const isValid = this.state.pwCheck === this.state.password;
    return (
      <div className={`Signup ${this.props.isSignVisible ? ' ' : 'X'}`}>
        <div className="outContainer" onClick={e => e.stopPropagation()}>
          <button className="closeBtn" onClick={this.props.handleSign}></button>
          <h1>SIGNUP</h1>

          <input
            className="nameInfo"
            placeholder=" 이름"
            onChange={this.handleInput}
            name="name"
          />

          <input
            className="idInfo"
            placeholder=" 아이디"
            onChange={this.handleInput}
            name="account"
          />

          <button className="sameCheck" onClick={this.idCheck}>
            중복확인
          </button>

          <input
            className="secretNum"
            type="password"
            placeholder=" 비밀번호(알파벳 대,소문자,숫자,특수문자 포함)"
            onChange={this.handleInput}
            name="password"
          />

          <input
            className={`checkNumber ${isValid ? '' : 'fail'}`}
            type="password"
            placeholder=" 비밀번호 확인"
            onChange={this.handleInput}
            name="pwCheck"
          />

          <input
            className="emailInfo"
            placeholder=" 이메일"
            onChange={this.handleInput}
            name="email"
          />
          <label> 개인정보 이용 수집 </label>
          <div className="privacyInfo">
            <p className="privacySentence">
              목적: 서비스 제공 및 서비스 사용에 따른 <br />
              <br />
              본인확인,가입연력 확인, 중복가입 및 부정이용 방지
              <br />
              <br />
              -항목:성명,이메일,가입확인정보
              <br /> -보유 및 이용기간:회원탈퇴 후 5일까지
            </p>
          </div>

          <input
            type="checkbox"
            name="checked"
            className="agreeCheck"
            onChange={this.handleCheck}
          />
          <p>약관을 모두 읽었으며 동의합니다.</p>

          <button className="join" onClick={this.clickSignup}>
            등록
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
