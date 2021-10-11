import React, { Component } from 'react';
import './Search.scss';
class Search extends Component {
  render() {
    return (
      <>
        <div className="searchArea">
          <div className="searchBox">
            <form>
              <input className="searchInput" placeholder="SEARCH" />
              <button>
                <i className="fas fa-ban"></i>
              </button>
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <span>당신의 맛있는 하루를 위한</span>
            <ul>
              {/* <li># 샐러드</li>
              <li># 만두연구소</li>
              <li># 집밥</li>
              <li># 맛집</li>
              <li># 간식</li>
              <li># 보양식</li>
              <li># 홈파티</li>
              <li># 곤드레</li> */}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
