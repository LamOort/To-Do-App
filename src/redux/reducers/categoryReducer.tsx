import { v4 as uuidv4 } from 'uuid';
import {
  CategoryState,
  CategoryActionTypes,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  MODIFY_CATEGORY_NAME,
  MODIFY_CATEGORY_COLOR,
  GET_ALL_CATEGORY,
} from '../../types';

const categoryInitialState: CategoryState = {
  categories: [
    {
      id: uuidv4(),
      name: 'Homework',
      color: '#FF3838',
    },
    {
      id: uuidv4(),
      name: 'Assignment',
      color: '#FFAB38',
    },
    {
      id: uuidv4(),
      name: 'Work',
      color: '#38C9FF',
    },
  ],
};

export function categoryReducer(
  state: CategoryState = categoryInitialState,
  action: CategoryActionTypes
): CategoryState {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.payload
        ),
      };
    case MODIFY_CATEGORY_NAME:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload
            ? { ...category, name: category.name }
            : category
        ),
      };
    case MODIFY_CATEGORY_COLOR:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload
            ? { ...category, color: category.color }
            : category
        ),
      };
    case GET_ALL_CATEGORY:
      return state;
    default:
      return state;
  }
}
