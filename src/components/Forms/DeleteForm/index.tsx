import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { deleteTodoAction } from '../../../redux/actions/todoActions';
import { setModalType } from '../../../redux/actions/modalActions';
import { deleteCategoryAction } from '../../../redux/actions/categoryActions';

import './DeleteForm.scss';

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
    <div className="DeleteForm__Wrapper">
      <button
        className="DeleteForm__btn DeleteForm__btn--delete"
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
        <p>Delete this {deleteType}</p>
      </button>
      <button
        className="DeleteForm__btn DeleteForm__btn--cancel"
        onClick={() => {
          dispatch(setModalType(''));
        }}
      >
        <p>Cancel</p>
      </button>
    </div>
  );
};

export default DeleteForm;
