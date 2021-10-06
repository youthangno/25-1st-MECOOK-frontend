import React, { Component } from 'react';
import '../MainImg/MainImg.scss';

class MainImg extends Component {
  render() {
    return (
      <section className="mainImg">
        <img src="/images/Main/hamburger.jpg" />
        <p>
          VIEW MORE&nbsp;<i class="far fa-play-circle"></i>
        </p>
      </section>
    );
  }
}

export default MainImg;
