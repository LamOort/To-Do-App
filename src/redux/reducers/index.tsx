import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { categoryReducer } from './categoryReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
  todosGlobal: todoReducer,
  categoriesGlobal: categoryReducer,
  modalTypeGlobal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
