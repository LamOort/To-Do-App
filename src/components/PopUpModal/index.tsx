import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import CategoryForm from '../Forms/CategoryForm';
import DeleteForm from '../Forms/DeleteForm';

import { RootState } from '../../redux/reducers';
import { setModalType } from '../../redux/actions/modalActions';

import './PopUpModal.scss';
import ChooseCategoryForm from '../Forms/ChooseCategoryForm';

const PopUpModal = () => {
  const modalType = useSelector((state: RootState) => {
    return state.modalTypeGlobal.modalType;
  }, shallowEqual);

  const dispatch = useDispatch();

  return (
    <div
      className={`PopUpModal__Wrapper PopUpModal__Wrapper--${
        modalType !== null ? 'active' : 'hidden'
      }`}
    >
      <div
        onClick={() => dispatch(setModalType())}
        style={{ height: '100%', width: '100' }}
      ></div>
      <div className="PopUpModal__Modal">
        {modalType === 'CategoryModal' ? (
          <CategoryForm />
        ) : modalType === 'DeleteCategory' ? (
          <DeleteForm deleteType="category" />
        ) : modalType === 'DeleteTask' ? (
          <DeleteForm deleteType="task" />
        ) : modalType === 'ChooseCategoryForm' ? (
          <ChooseCategoryForm />
        ) : null}
      </div>
    </div>
  );
};

export default PopUpModal;
