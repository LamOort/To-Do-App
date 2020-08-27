import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  MODIFY_TODO,
  Todo,
  GET_CAPTURED_TODO_ID,
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

export const modifyTodoAction = (todo: Todo) => ({
  type: MODIFY_TODO,
  payload: todo,
});

export const getCapturedTodoIdAction = (todoId: Todo['id']) => ({
  type: GET_CAPTURED_TODO_ID,
  payload: todoId,
});
