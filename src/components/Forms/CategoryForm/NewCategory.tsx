import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { Category } from '../../../types';
import {
  getCapturedCategoryObjectAction,
  getCapturedCategoryColorAction,
  addCategoryAction,
} from '../../../redux/actions/categoryActions';
import { setModalType } from '../../../redux/actions/modalActions';

const NewCategoryForm = () => {
  const listofCategories = useSelector((state: RootState) => {
    return state.categoriesGlobal.categories;
  }, shallowEqual);

  const capturedCategoryObj = useSelector((state: RootState) => {
    return state.categoriesGlobal.capturedCategoryObject;
  }, shallowEqual);

  const [colorDisplay, setColorDisplay] = useState('');

  const [nameDisplay, setNameDisplay] = useState('');

  const dispatch = useDispatch();

  /*  const ColorDisplayStyle = {
    backgroundColor: { colorPicked },
  }; */

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameDisplay(e.target.value);
  };

  const colorInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorDisplay(e.target.value);
  };

  const colorValidCheckRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  const handlerOnSubmit = () => {
    if (colorValidCheckRegex.test(colorDisplay)) {
      const newCategoryObj = {
        id: uuidv4(),
        name: nameDisplay,
        color: colorDisplay,
      };
      dispatch(addCategoryAction(newCategoryObj));
      dispatch(setModalType(''));
    } else alert('Invalid color code, please try again.');
  };

  return (
    <form className="CategoryForm">
      <label className="CategoryForm__label">Category name</label>
      <input
        type="text"
        className="CategoryForm__input"
        onChange={nameInputHandler}
      />

      <label className="CategoryForm__label CategoryForm__label--color">
        Category color
      </label>
      <div
        className="CategoryForm__ColorDisplay"
        style={{ backgroundColor: colorDisplay }}
      ></div>

      <div className="flexbox-container">
        {listofCategories.map((category: Category) => {
          return (
            <div
              className="CategoryForm__colorItem"
              key={category.id}
              style={{ backgroundColor: category.color }}
              onClick={() => setColorDisplay(category.color)}
            ></div>
          );
        })}
        <div className="CategoryForm__colorItem"></div>
        <input
          type="text"
          className="CategoryForm__input CategoryForm__input--color"
          defaultValue="#"
          value={colorDisplay}
          onChange={colorInputHandler}
        />
      </div>

      <svg
        id="trash-solid"
        xmlns="http://www.w3.org/2000/svg"
        width="16.625"
        height="19"
        viewBox="0 0 16.625 19"
        className="CategoryForm__trash-icon"
        onClick={() => dispatch(setModalType(''))}
      >
        <path
          id="trash-solid-2"
          data-name="trash-solid"
          d="M16.031,1.187H11.578L11.229.493a.891.891,0,0,0-.8-.494H6.19A.88.88,0,0,0,5.4.493l-.349.694H.594A.594.594,0,0,0,0,1.781V2.969a.594.594,0,0,0,.594.594H16.031a.594.594,0,0,0,.594-.594V1.781A.594.594,0,0,0,16.031,1.187ZM1.974,17.33A1.781,1.781,0,0,0,3.752,19h9.121a1.781,1.781,0,0,0,1.778-1.67l.787-12.58H1.187Z"
          transform="translate(0 0)"
          fill="#ccc"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        className="CategoryForm__ticked-icon"
        onClick={handlerOnSubmit}
      >
        <g id="Group_10" data-name="Group 10" transform="translate(-523 -493)">
          <circle
            id="Ellipse_9"
            data-name="Ellipse 9"
            cx="17.5"
            cy="17.5"
            r="17.5"
            transform="translate(523 493)"
            fill="#f77062"
          />
          <path
            id="check-solid"
            d="M5.051,75.969.218,71.136a.744.744,0,0,1,0-1.051l1.051-1.051a.743.743,0,0,1,1.051,0l3.255,3.255,6.973-6.973a.743.743,0,0,1,1.051,0l1.051,1.051a.744.744,0,0,1,0,1.051L6.1,75.969a.743.743,0,0,1-1.051,0Z"
            transform="translate(533.13 439.49)"
            fill="#fff"
          />
        </g>
      </svg>
    </form>
  );
};

export default NewCategoryForm;
