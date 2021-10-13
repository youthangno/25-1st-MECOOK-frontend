import React, { Component } from 'react';
import '../MainImg/MainImg.scss';

class MainImg extends Component {
  showSlides() {
    let slideWrapper = document.querySelector('.container');
    console.log(slideWrapper);
    let slides = document.querySelectorAll('.item');
    let totalSlides = slides.length; // item의 갯수

    let sliderWidth = slideWrapper.clientWidth; // container의 width
    let slideIndex = 0;
    let slider = document.querySelector('.slider');

    slider.style.width = sliderWidth * totalSlides + 'px';
    for (let i = 0; i < slides.length; i++) {
      slider.style.left = -(sliderWidth * slideIndex) + 'px';
    }
    slideIndex++;
    if (slideIndex === totalSlides) {
      slideIndex = 0;
    }
    setTimeout(this.showSlides, 100);
  }
  componentDidMount() {
    this.showSlides();
  }
  render() {
    return (
      <section className="mainImg">
        <div className="wrapper">
          <div className="container">
            <ul className="slider">
              <li className="item">
                <img
                  className="mySlides"
                  alt="hamburger"
                  src="/images/Main/hamburger.jpg"
                />
              </li>
              <li className="item">
                <img
                  className="mySlides"
                  alt="hamburger"
                  src="/images/Main/hamburger.jpg"
                />
              </li>
              <li className="item">
                <img
                  className="mySlides"
                  alt="hamburger"
                  src="/images/Main/hamburger.jpg"
                />
              </li>
            </ul>
          </div>
        </div>
        {/* <img
          className="mySlides"
          alt="hamburger"
          src="/images/Main/hamburger.jpg"
        />
        <a href="https://namu.wiki/w/%ED%94%84%EB%A6%B0%EC%84%B8%EC%8A%A4%20%EB%A9%94%EC%9D%B4%EC%BB%A4">
          <p>
            PRINCESSMAKER&nbsp;<i className="far fa-play-circle"></i>
          </p>
        </a> */}
      </section>
    );
  }
}

export default MainImg;
