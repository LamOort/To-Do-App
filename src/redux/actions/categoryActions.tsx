import {
  Category,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  MODIFY_CATEGORY_NAME,
  MODIFY_CATEGORY_COLOR,
  GET_ALL_CATEGORY,
} from '../../types';

export const addCategoryAction = (category: Category) => ({
  type: ADD_CATEGORY,
  payload: category,
});

export const deleteCategoryAction = (categoryId: Category['id']) => ({
  type: DELETE_CATEGORY,
  payload: categoryId,
});

export const modifyCategoryNameAction = (categoryId: Category['id']) => ({
  type: MODIFY_CATEGORY_NAME,
  payload: categoryId,
});

export const modifyCategoryColorAction = (categoryId: Category['id']) => ({
  type: MODIFY_CATEGORY_COLOR,
  payload: categoryId,
});

export const getAllCategory = (category: Category) => ({
  type: GET_ALL_CATEGORY,
  payload: category,
});
