import React from 'react';
import AddButton from '../../../assets/plus-solid.svg';

import CategoryElement from './CategoryElement';
import './CategoryBar.scss';

const CategoryBar = () => {
  return (
    <div className="CategoryBar__flex-container">
      <CategoryElement categoryName="Homework" categoryColor="#38C9FF" />
      <CategoryElement categoryName="Assignment" categoryColor="#FFAB38" />
      <CategoryElement categoryName="Work" categoryColor="#FF3838" />

      <button className="CategoryBar__add-btn">
        <img src={AddButton} alt="add button" />
      </button>
    </div>
  );
};

export default CategoryBar;
