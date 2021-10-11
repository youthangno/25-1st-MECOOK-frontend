import React from 'react';
import { Link } from 'react-router-dom';
import './TagBottom.scss';

class TagBottom extends React.Component {
  render() {
    const result = this.props.resultDataList;
    // console.log(result);

    // console.log('result==>', result[0]);
    // const hashTag =
    //   result[0].hashtag &&
    //   result[0].hashtag.map(tag => {
    //     <li>{tag}</li>;
    //   });
    return (
      <div className="tagBottom">
        <div className="recommandTag">
          <h1>당신을 위한 추천 태그</h1>
        </div>
        <ul className="tagList">
          {result &&
            result[0].hashtag.map((tag, i) => {
              return (
                <li key={i}>
                  <Link to="#">{`#${tag}`}</Link>
                </li>
              );
            })}
          {/* {hashTag ? hashTag : null} */}
          {/* <li>#{result ? result[0].hashtag[0] : null}</li>
          <li>#{result ? result[0].hashtag[1] : null}</li>
          <li>#{result ? result[0].hashtag[2] : null}</li>
          <li>#{result ? result[0].hashtag[3] : null}</li>
          <li>#{result ? result[0].hashtag[4] : null}</li>
          <li>#{result ? result[0].hashtag[5] : null}</li>
          <li>#{result ? result[0].hashtag[6] : null}</li> */}
        </ul>
      </div>
    );
  }
}

export default TagBottom;
