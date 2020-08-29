import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  Todo,
  GET_CAPTURED_TODO_ID,
  MODIFY_TODO,
  GET_CAPTURED_TODO_OBJECT,
  GET_CAPTURED_COLOR_FOR_TODO,
} from '../../types';

export const addTodoAction = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodoAction = (todoId: Todo['id']) => ({
  type: TOGGLE_TODO,
  payload: todoId,
});

export const deleteTodoAction = (todoId: Todo['id']) => ({
  type: DELETE_TODO,
  payload: todoId,
});

export const modifyTodoAction = (todo: Object) => ({
  type: MODIFY_TODO,
  payload: todo,
});

export const getCapturedTodoIdAction = (todoId: Todo['id']) => ({
  type: GET_CAPTURED_TODO_ID,
  payload: todoId,
});

export const getCapturedTodoObjectAction = (todo: Todo) => ({
  type: GET_CAPTURED_TODO_OBJECT,
  payload: todo,
});

export const getCapturedColorForTodoAction = (color: string) => ({
  type: GET_CAPTURED_COLOR_FOR_TODO,
  payload: color,
});
