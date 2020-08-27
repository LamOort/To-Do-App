import {
  Category,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  MODIFY_CATEGORY,
  GET_CAPTURED_CATEGORY_ID,
} from '../../types';

export const addCategoryAction = (category: Category) => ({
  type: ADD_CATEGORY,
  payload: category,
});

export const deleteCategoryAction = (categoryId: Category['id']) => ({
  type: DELETE_CATEGORY,
  payload: categoryId,
});

export const modifyCategoryAction = (category: Category) => ({
  type: MODIFY_CATEGORY,
  payload: category,
});

export const getCapturedCategoryIdAction = (categoryId: string) => ({
  type: GET_CAPTURED_CATEGORY_ID,
  payload: categoryId,
});
