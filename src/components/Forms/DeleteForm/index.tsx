import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import {
  deleteTodoAction,
  getCapturedTodoIdAction,
} from '../../../redux/actions/todoActions';
import { setModalType } from '../../../redux/actions/modalActions';
import { deleteCategoryAction } from '../../../redux/actions/categoryActions';

interface deleteFormProps {
  deleteType: string;
}

const DeleteForm = ({ deleteType }: deleteFormProps) => {
  const todoIdCaptured = useSelector((state: RootState) => {
    return state.todosGlobal.capturedTodoId;
  });

  const capturedCategoryObj = useSelector((state: RootState) => {
    return state.categoriesGlobal.capturedCategoryObject;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          if (deleteType === 'task') {
            dispatch(deleteTodoAction(todoIdCaptured));
          }

          if (deleteType === 'category') {
            dispatch(deleteCategoryAction(capturedCategoryObj.id));
          }
          dispatch(setModalType(''));
        }}
      >
        Delete this {deleteType}
      </button>
      <button
        onClick={() => {
          dispatch(setModalType(''));
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default DeleteForm;
