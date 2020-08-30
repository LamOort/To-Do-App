import React, { useState } from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../redux/reducers';

import './StatusBar.scss';

const StatusBar = (props: any) => {
  const listOfTodos = useSelector((state: RootState) => {
    return state.todosGlobal.todos;
  }, shallowEqual);

  const ongoingTodosCounter: number = listOfTodos.filter((todo) => {
    return !todo.completed;
  }).length;

  const [changeBackground, setChangeBackground] = useState({
    allClicked: true,
    ongoingClicked: false,
    completedClicked: false,
  });

  return (
    <div className="StatusBar">
      <div className="StatusBar__text">
        <p>{ongoingTodosCounter} tasks left</p>
      </div>

      <div className="StatusBar__filterWrapper">
        <div
          className={`StatusBar__filter StatusBar__filter--${
            changeBackground.allClicked ? 'active' : 'inactive'
          }`}
          onClick={() => {
            props.clickedFilter('all');
            setChangeBackground({
              allClicked: true,
              ongoingClicked: false,
              completedClicked: false,
            });
          }}
        >
          <p>all</p>
        </div>

        <div
          className={`StatusBar__filter StatusBar__filter--${
            changeBackground.ongoingClicked ? 'active' : 'inactive'
          }`}
          onClick={() => {
            props.clickedFilter('ongoing');
            setChangeBackground({
              allClicked: false,
              ongoingClicked: true,
              completedClicked: false,
            });
          }}
        >
          <p>ongoing</p>
        </div>
        <div
          className={`StatusBar__filter StatusBar__filter--${
            changeBackground.completedClicked ? 'active' : 'inactive'
          }`}
          onClick={() => {
            props.clickedFilter('completed');
            setChangeBackground({
              allClicked: false,
              ongoingClicked: false,
              completedClicked: true,
            });
          }}
        >
          <p>compeleted</p>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
