import { v4 as uuidv4 } from 'uuid';
import {
  ToDoState,
  TodoActionTypes,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  MODIFY_TODO_CATEGORY_COLOR,
  GET_ALL_TODO,
} from '../../types';

const toDoInitialState: ToDoState = {
  todos: [
    {
      id: uuidv4(),
      description: 'Fix order cancellation',
      completed: false,
      categoryColor: '#38C9FF',
    },
    {
      id: uuidv4(),
      description: 'Make my bed',
      completed: false,
      categoryColor: '#FF3838',
    },
    {
      id: uuidv4(),
      description: 'Write new funtions',
      completed: false,
      categoryColor: '#FFAB38',
    },
  ],
};

export function todoReducer(
  state: ToDoState = toDoInitialState,
  action: TodoActionTypes
): ToDoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case MODIFY_TODO_CATEGORY_COLOR:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, categoryColor: todo.categoryColor }
            : todo
        ),
      };
    case GET_ALL_TODO:
      return state;

    default:
      return state;
  }
}
