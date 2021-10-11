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

  handleSubmit = e => {
    e.preventDefault();
  };

  handleInput = e => {
    this.setState({
      inputData: e.target.value,
    });
  };

  handleReset = () => {
    this.setState({
      inputData: '',
    });
  };

  // // handleDelete 클릭하면 inputData값을 지워죠

  render() {
    return (
      <>
        <div className="searchArea">
          <div className="searchBox">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="searchInput"
                placeholder="SEARCH"
                onChange={this.handleInput}
                value={this.state.inputData}
              />
              <button>
                <i className="fas fa-ban" onClick={this.handleReset}></i>
              </button>
              <button>
                <i className="fas fa-search" onClick={'#'}></i>
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
