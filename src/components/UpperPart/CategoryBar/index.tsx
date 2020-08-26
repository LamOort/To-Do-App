import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { RootState } from '../../../redux/reducers';
import { Category } from '../../../types';

import AddButton from '../../../assets/plus-solid.svg';
import PopUpModal from '../../PopUpModal';
import DeleteForm from '../../Forms/DeleteForm';

import CategoryElement from './CategoryElement';
import './CategoryBar.scss';

const CategoryBar = () => {
  const listofCategories = useSelector((state: RootState) => {
    return state.categoriesGlobal.categories;
  }, shallowEqual);

  const [isOpen, setIsOpen] = useState(false);

  const openCreateCategoryModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="CategoryBar__flex-container">
      {listofCategories.map((category: Category) => {
        return (
          <CategoryElement
            key={category.id}
            categoryName={category.name}
            categoryColor={category.color}
          />
        );
      })}

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
