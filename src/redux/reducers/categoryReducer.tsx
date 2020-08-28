import { v4 as uuidv4 } from 'uuid';
import {
  CategoryState,
  CategoryActionTypes,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  MODIFY_CATEGORY,
  GET_CAPTURED_CATEGORY_ID,
  GET_CAPTURED_CATEGORY_OBJECT,
  GET_CAPTURED_CATEGORY_COLOR,
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
  capturedCategoryId: '',
  capturedCategoryColor: '',
  capturedCategoryObject: {},
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

    case GET_CAPTURED_CATEGORY_OBJECT:
      return {
        ...state,
        capturedCategoryObject: action.payload,
      };

    case GET_CAPTURED_CATEGORY_COLOR:
      return {
        ...state,
        capturedCategoryColor: action.payload,
      };

    case MODIFY_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.id === action.payload.id) {
            return action.payload;
          }
          return category;
        }),
      };

    case GET_CAPTURED_CATEGORY_ID:
      return {
        ...state,
        capturedCategoryId: action.payload,
      };
    default:
      return state;
  }
}
