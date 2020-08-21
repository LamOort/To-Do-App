import React, { useState } from 'react';
import AddButton from '../../../assets/plus-solid.svg';

import CategoryElement from './CategoryElement';
import './CategoryBar.scss';
import PopUpModal from '../../PopUpModal';
import DeleteForm from '../../Forms/DeleteForm';

const CategoryBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCreateCategoryModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="CategoryBar__flex-container">
      <CategoryElement categoryName="Homework" categoryColor="#38C9FF" />
      <CategoryElement categoryName="Assignment" categoryColor="#FFAB38" />
      <CategoryElement categoryName="Work" categoryColor="#FF3838" />
      <button
        type="button"
        className="CategoryBar__add-btn"
        onClick={openCreateCategoryModal}
      >
        <img src={AddButton} alt="add button" />
      </button>
      <PopUpModal isOpen={isOpen} modalType="CategoryModal" />
    </div>
  );
};

export default CategoryBar;
