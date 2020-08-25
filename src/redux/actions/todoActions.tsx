import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  MODIFY_TODO_CATEGORY_COLOR,
  Todo,
  GET_ALL_TODO,
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

export const ModifyTodoCategoryColorAction = (todoId: Todo['id']) => ({
  type: MODIFY_TODO_CATEGORY_COLOR,
  payload: todoId,
});

export const getAllTodo = (todo: Todo) => ({
  type: GET_ALL_TODO,
  payload: todo,
});
