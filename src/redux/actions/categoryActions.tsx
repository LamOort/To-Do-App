import {
  Category,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  MODIFY_CATEGORY,
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

/* export const getAllCategory = (category: Category) => ({
  type: GET_ALL_CATEGORY,
  payload: category,
}); */
