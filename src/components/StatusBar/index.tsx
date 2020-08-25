import * as React from 'react';
import './StatusBar.scss';
import { VISIBILITY_FILTERS } from '../../types';

interface Props {
  activeFilter: string;
  setFilter: string;
  taskCount: number;
}

const StatusBar = ({ activeFilter, setFilter, taskCount }: Props) => {
  return (
    <div className="StatusBar">
      <div>
        <p className="StatusBar__text">8 tasks left</p>
      </div>

      <div className="StatusBar__filterWrapper">
        {/* {Object.keys(VISIBILITY_FILTERS).map((fillerKey) => {
          const currentFilter =
        })} */}

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
