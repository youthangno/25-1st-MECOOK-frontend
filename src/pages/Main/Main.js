import React from 'react';
import MainImg from './MainImg/MainImg';
import Best from './Best/Best';
import Brand from './Brand/Brand';
import Gourmet from './Gourmet/Gourmet';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <MainImg />
        <Best />
        <Brand />
        <Gourmet />
      </>
    );
  }
}

export default Main;
