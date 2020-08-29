import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { setModalType } from '../../redux/actions/modalActions';

import CategoryForm from '../Forms/CategoryForm/Category';
import NewCategoryForm from '../Forms/CategoryForm/NewCategory';
import DeleteForm from '../Forms/DeleteForm';
import ChooseCategoryForm from '../Forms/ChooseCategoryForm';
import TodoColorPickingForm from '../Forms/ChooseCategoryForm/TodoColorPickingForm';

import './PopUpModal.scss';

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
        {modalType === 'Category' ? (
          <CategoryForm />
        ) : modalType === 'NewCategory' ? (
          <NewCategoryForm />
        ) : modalType === 'DeleteCategory' ? (
          <DeleteForm deleteType="category" />
        ) : modalType === 'DeleteTask' ? (
          <DeleteForm deleteType="task" />
        ) : modalType === 'ChooseCategory' ? (
          <ChooseCategoryForm />
        ) : modalType === 'TodoColorPicking' ? (
          <TodoColorPickingForm />
        ) : null}
      </div>
    </div>
  );
};

export default PopUpModal;
