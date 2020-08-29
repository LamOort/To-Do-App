import { v4 as uuidv4 } from 'uuid';
import {
  ToDoState,
  TodoActionTypes,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  MODIFY_TODO,
  GET_CAPTURED_TODO_ID,
  GET_CAPTURED_TODO_OBJECT,
  GET_CAPTURED_COLOR_FOR_TODO,
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
  capturedTodoId: '',
  capturedTodoObject: {},
  capturedColorForTodo: '',
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
    case MODIFY_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };

    case GET_CAPTURED_TODO_ID:
      return {
        ...state,
        capturedTodoId: action.payload,
      };

    case GET_CAPTURED_TODO_OBJECT:
      return {
        ...state,
        capturedTodoObject: action.payload,
      };

    case GET_CAPTURED_COLOR_FOR_TODO:
      return {
        ...state,
        capturedColorForTodo: action.payload,
      };

    default:
      return state;
  }
}
