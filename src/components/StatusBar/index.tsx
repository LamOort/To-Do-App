import * as React from 'react';
import './StatusBar.scss';

interface Props {}

const StatusBar = ({}: Props) => {
  return (
    <div className="StatusBar">
      <div>
        <p className="StatusBar__text">8 tasks left</p>
      </div>

      <div className="StatusBar__filterWrapper">
        <div className="StatusBar__filter">
          <p>all</p>
        </div>
        <div className="StatusBar__filter">
          <p>ongoing</p>
        </div>
        <div className="StatusBar__filter">
          <p>compeleted</p>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
