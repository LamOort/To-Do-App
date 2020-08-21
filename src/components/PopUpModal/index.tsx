import * as React from 'react';
import './PopUpModal.scss';
import CategoryForm from '../Forms/CategoryForm';
import DeleteForm from '../Forms/DeleteForm';

interface ModalProps {
  isOpen: boolean;
  modalType: string;
}

const PopUpModal = ({ isOpen, modalType }: ModalProps) => {
  if (modalType === 'CategoryModal') {
    return (
      <div
        className={`PopUpModal__Wrapper PopUpModal__Wrapper--${
          isOpen ? 'active' : 'hidden'
        }`}
      >
        <div className="PopUpModal__Modal">
          <CategoryForm />
        </div>
      </div>
    );
  }

  if (modalType === 'DeleteCategory') {
    return (
      <div
        className={`PopUpModal__Wrapper PopUpModal__Wrapper--${
          isOpen ? 'active' : 'hidden'
        }`}
      >
        <div className="PopUpModal__Modal">
          <DeleteForm deleteType="category" />
        </div>
      </div>
    );
  }

  if (modalType === 'DeleteTask') {
    return (
      <div
        className={`PopUpModal__Wrapper PopUpModal__Wrapper--${
          isOpen ? 'active' : 'hidden'
        }`}
      >
        <div className="PopUpModal__Modal">
          <DeleteForm deleteType="task" />
        </div>
      </div>
    );
  }

  return null;
};

export default PopUpModal;
