import React from 'react';
import './NutritionTable.scss';

class NutritionTable extends React.Component {
  render() {
    return (
      <p className="nutritionTable">
        {/* 영양정보 데이터값 */}
        <p>용량 : 2인분</p>
        <p>종류 : 디저트</p>
        <p>조리시간 : 5분</p>
      </p>
    );
  }
}

export default NutritionTable;
