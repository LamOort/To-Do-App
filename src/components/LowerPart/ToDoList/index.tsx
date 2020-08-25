import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ToDoItem from './ToDoItem';
import { RootState } from '../../../redux/reducers';

import './ToDoList.scss';
import { Todo, TOGGLE_TODO, ToDoState } from '../../../types';

const ToDoList = () => {
  const listOfTodos = useSelector((state: RootState) => {
    console.log(state);
    return state.todo.todos;
  });

  const dispatch = useDispatch();

  return (
    <div className="ToDoList">
      {listOfTodos.map((todo: Todo) => {
        return (
          <ToDoItem
            key={todo.id}
            categoryColor={todo.categoryColor}
            toDoDescription={todo.description}
            checkboxHandlerFunc={() =>
              dispatch({ type: TOGGLE_TODO, payload: todo.id })
            }
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
