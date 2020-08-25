import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { categoryReducer } from './categoryReducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
  category: categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
