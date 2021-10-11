import React, { Component } from 'react';
import './ReviewBtn.scss';

class ReviewBtn extends Component {
  addRepl = () => {};
  render() {
    return (
      <div className="viewMore">
        <button className="viewMoreBtn" onClick={this.addRepl}>
          &nbsp;&nbsp;VIEW MORE&#8314;&nbsp;&nbsp;
        </button>
        <span>1</span>
        <span>/10</span>
      </div>
    );
  }
}

export default ReviewBtn;
