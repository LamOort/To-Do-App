import * as React from 'react';

import './ProgressionBar.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { Todo } from '../../../types';

const ProgressionBar = () => {
  const listOfTodos: Todo[] = useSelector((state: RootState) => {
    return state.todosGlobal.todos;
  });

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
