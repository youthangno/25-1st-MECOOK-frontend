import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HashTag from './HashTag/HashTag';
import './Search.scss';
class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputData: '',
    };
  }

  //   handleDelete = () => {
  //     this.setState({
  //       inputData:
  //     })
  //   };

  // // handleDelete 클릭하면 inputData값을 지워죠

  render() {
    return (
      <>
        <div className="searchArea">
          <div className="searchBox">
            <form>
              <input type="text" className="searchInput" placeholder="SEARCH" />
              <button>
                <i className="fas fa-ban"></i>
              </button>
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <HashTag />
          </div>
        </div>
      </>
    );
  }
}

export default Search;
