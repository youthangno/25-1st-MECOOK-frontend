import React from 'react';
import './Signup.scss';
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
    };
  }

  idCheck = e => {
    e.preventDefault();
    const { usableId } = this.state;
    fetch('http://10.58.2.115:8000/user/signup/check', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ account: this.state.account }),
    }).then(response => {
      if (response.status === 200) {
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
    const { name, account, password, pwCheck, email, usableId } = this.state;
    if (usableId === false) {
      alert('아이디 중복확인을 해주세요');
    } else if (!name || !account || !password || !pwCheck || !email) {
      alert('필수 항목을 작성해주세요');
    } else {
      fetch('http://10.58.2.115:8000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          account: this.state.account,
          password: this.state.password,
          pwCheck: this.state.pwCheck,
          email: this.state.email,
        }),
      }).then(res => {
        if (res.status === 400) {
          alert('다시 한 번 확인해주세요!');
        } else {
          alert('가입 완료 !');
        }
        this.props.history.push('/');
      });
    }
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  inputId = e => {
    this.setState({ user_id: e.targer.value });
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

        <button className="sameCheck" onChange={this.inputId}>
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

        <button className="join" onClick={this.clickSignup}>
          등록
        </button>
      </div>
    );
  }
}

export default Signup;
