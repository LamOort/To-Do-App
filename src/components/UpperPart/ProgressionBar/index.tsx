import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../../redux/reducers';

import { Todo } from '../../../types';
import './ProgressionBar.scss';

const ProgressionBar = () => {
  const listOfTodos: Todo[] = useSelector((state: RootState) => {
    return state.todosGlobal.todos;
  }, shallowEqual);

  const completedTodosCounter: number = listOfTodos.filter((todo) => {
    return todo.completed;
  }).length;

  const completion: string = (
    (completedTodosCounter / listOfTodos.length) *
    100
  ).toFixed();

  const fillerStyle = {
    width: `${completion}%`,
  };

  return (
    <div className="ProgressionBar">
      <div className="ProgressionBar__colored-filler" style={fillerStyle}></div>
      <span className="ProgressionBar__label">{`${completion}% Completed`}</span>
    </div>
  );
};

export default ProgressionBar;
