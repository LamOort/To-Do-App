import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import ToDoItem from './ToDoItem';
import { RootState } from '../../../redux/reducers';

import { Todo } from '../../../types';

import './ToDoList.scss';

const ToDoList = React.memo((props: any) => {
  const listOfTodos = useSelector((state: RootState) => {
    return state.todosGlobal.todos;
  }, shallowEqual);

  const filteredCompletedTodos = listOfTodos.filter(
    (todo) => todo.completed === true
  );

  const filteredOngoingTodos = listOfTodos.filter((todo) => !todo.completed);

  console.log(filteredOngoingTodos);

  if (props.filterNameHasBeenClicked === 'all') {
    return (
      <div className="ToDoList">
        {listOfTodos.map((todo: Todo) => {
          return (
            <ToDoItem
              key={todo.id}
              todoId={todo.id}
              todoCategoryColor={todo.categoryColor}
              toDoDescription={todo.description}
              toDoCompleted={todo.completed}
            />
          );
        })}
      </div>
    );
  }

  if (props.filterNameHasBeenClicked === 'completed') {
    return (
      <div className="ToDoList">
        {filteredCompletedTodos.map((todo: Todo) => {
          return (
            <ToDoItem
              key={todo.id}
              todoId={todo.id}
              todoCategoryColor={todo.categoryColor}
              toDoDescription={todo.description}
              toDoCompleted={todo.completed}
            />
          );
        })}
      </div>
    );
  }

  if (props.filterNameHasBeenClicked === 'ongoing') {
    return (
      <div className="ToDoList">
        {filteredOngoingTodos.map((todo: Todo) => {
          return (
            <ToDoItem
              key={todo.id}
              todoId={todo.id}
              todoCategoryColor={todo.categoryColor}
              toDoDescription={todo.description}
              toDoCompleted={todo.completed}
            />
          );
        })}
      </div>
    );
  } else return null;
});

export default ToDoList;
