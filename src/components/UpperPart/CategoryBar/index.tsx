import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { RootState } from '../../../redux/reducers';
import { Category } from '../../../types';
import { setModalType } from '../../../redux/actions/modalActions';

import CategoryElement from './CategoryElement';
import AddButton from '../../../assets/plus-solid.svg';
import './CategoryBar.scss';
import { getCapturedCategoryObjectAction } from '../../../redux/actions/categoryActions';

const CategoryBar = () => {
  const listofCategories = useSelector((state: RootState) => {
    return state.categoriesGlobal.categories;
  }, shallowEqual);

  const dispatch = useDispatch();

  return (
    <div className="CategoryBar__flex-container">
      {listofCategories.map((category: Category) => {
        return (
          <div
            className="CategoryBar_Element-wrapper"
            onClick={() => {
              dispatch(
                getCapturedCategoryObjectAction({
                  id: category.id,
                  name: category.name,
                  color: category.color,
                })
              );
              dispatch(setModalType('Category'));
            }}
          >
            <CategoryElement
              key={category.id}
              categoryId={category.id}
              categoryName={category.name}
              categoryColor={category.color}
              isModalStyle={false}
            />
          </div>
        );
      })}

      <button
        type="button"
        className="CategoryBar__add-btn"
        onClick={() => dispatch(setModalType('NewCategory'))}
      >
        <img src={AddButton} alt="add button" />
      </button>
    </div>
  );
};

export default CategoryBar;
