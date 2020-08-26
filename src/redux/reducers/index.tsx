import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { categoryReducer } from './categoryReducer';

export const rootReducer = combineReducers({
  todosGlobal: todoReducer,
  categoriesGlobal: categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
