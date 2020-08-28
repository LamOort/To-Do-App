import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import {
  deleteTodoAction,
  getCapturedTodoIdAction,
} from '../../../redux/actions/todoActions';
import { setModalType } from '../../../redux/actions/modalActions';

interface deleteFormProps {
  deleteType: string;
}

const DeleteForm = ({ deleteType }: deleteFormProps) => {
  const todoIdCaptured = useSelector((state: RootState) => {
    return state.todosGlobal.capturedTodoId;
  });

  const categoryIdCaptured = useSelector((state: RootState) => {
    return state.categoriesGlobal.capturedCategoryId;
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
            dispatch(deleteTodoAction(categoryIdCaptured));
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
