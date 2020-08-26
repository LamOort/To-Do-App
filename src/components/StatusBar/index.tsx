import React from 'react';

import './StatusBar.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const StatusBar = (props: any) => {
  const listOfTodos = useSelector((state: RootState) => {
    return state.todosGlobal.todos;
  });

  const ongoingTodosCounter: number = listOfTodos.filter((todo) => {
    return !todo.completed;
  }).length;

  return (
    <div className="StatusBar">
      <div>
        <p className="StatusBar__text">{ongoingTodosCounter} tasks left</p>
      </div>

      <div className="StatusBar__filterWrapper">
        <div
          className="StatusBar__filter"
          onClick={() => {
            props.clickedFilter('all');
          }}
        >
          <p>all</p>
        </div>
        <div
          className="StatusBar__filter"
          onClick={() => {
            props.clickedFilter('ongoing');
          }}
        >
          <p>ongoing</p>
        </div>
        <div
          className="StatusBar__filter"
          onClick={() => {
            props.clickedFilter('completed');
          }}
        >
          <p>compeleted</p>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
