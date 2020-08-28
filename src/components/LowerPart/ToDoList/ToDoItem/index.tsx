import React from 'react';

import { useDispatch } from 'react-redux';
import { TOGGLE_TODO } from '../../../../types';

import './ToDoItem.scss';
import { setModalType } from '../../../../redux/actions/modalActions';
import {
  getCapturedTodoIdAction,
  getCapturedTodoObjectAction,
} from '../../../../redux/actions/todoActions';

interface Props {
  todoId: string;
  todoCategoryColor: string;
  toDoDescription: string;
  toDoCompleted: boolean;
}

const ToDoItem = ({
  todoId,
  todoCategoryColor,
  toDoDescription,
  toDoCompleted,
}: Props) => {
  const dispatch = useDispatch();

  const categoryColorStyle = {
    backgroundColor: `${todoCategoryColor}`,
    cursor: 'pointer',
  };

  return (
    <div className="ToDoItem">
      <div className="round">
        <input
          onClick={() => dispatch({ type: TOGGLE_TODO, payload: todoId })}
          type="checkbox"
          id={`checkbox-${todoId}`}
          defaultChecked={toDoCompleted}
        />
        <label
          htmlFor={`checkbox-${todoId}`}
          className="ToDoItem__check-box"
        ></label>
      </div>

      <div
        onClick={() => {
          dispatch(getCapturedTodoIdAction(todoId));
          dispatch(
            getCapturedTodoObjectAction({
              id: todoId,
              description: toDoDescription,
              completed: toDoCompleted,
              categoryColor: todoCategoryColor,
            })
          );
          dispatch(setModalType('ChooseCategory'));
        }}
        className="ToDoItem__category-color"
        style={categoryColorStyle}
      ></div>
      <span className="ToDoItem__to-do-content">{toDoDescription}</span>

      <div>
        <svg
          onClick={() => dispatch(setModalType('DeleteTask'))}
          className="ToDoItem__delete-btn"
          id="trash-solid"
          xmlns="http://www.w3.org/2000/svg"
          width="16.625"
          height="19"
          viewBox="0 0 16.625 19"
        >
          <path
            id="trash-solid-2"
            data-name="trash-solid"
            d="M16.031,1.187H11.578L11.229.493a.891.891,0,0,0-.8-.494H6.19A.88.88,0,0,0,5.4.493l-.349.694H.594A.594.594,0,0,0,0,1.781V2.969a.594.594,0,0,0,.594.594H16.031a.594.594,0,0,0,.594-.594V1.781A.594.594,0,0,0,16.031,1.187ZM1.974,17.33A1.781,1.781,0,0,0,3.752,19h9.121a1.781,1.781,0,0,0,1.778-1.67l.787-12.58H1.187Z"
            transform="translate(0 0)"
            fill="#ccc"
          />
        </svg>
      </div>
    </div>
  );
};

export default ToDoItem;
