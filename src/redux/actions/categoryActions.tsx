import {
  Category,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  MODIFY_CATEGORY,
  GET_CAPTURED_CATEGORY_ID,
  GET_CAPTURED_CATEGORY_OBJECT,
  GET_CAPTURED_CATEGORY_COLOR,
} from '../../types';

export const addCategoryAction = (category: Category) => ({
  type: ADD_CATEGORY,
  payload: category,
});

export const deleteCategoryAction = (categoryId?: string) => ({
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

export const getCapturedCategoryObjectAction = (category: Category) => ({
  type: GET_CAPTURED_CATEGORY_OBJECT,
  payload: category,
});

export const getCapturedCategoryColorAction = (color: Category['color']) => ({
  type: GET_CAPTURED_CATEGORY_COLOR,
  payload: color,
});
