import React from 'react';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '../../../redux/reducers';

import CategoryElement from '../../UpperPart/CategoryBar/CategoryElement';
import { setModalType } from '../../../redux/actions/modalActions';

import {
  getCapturedCategoryIdAction,
  getCapturedCategoryObjectAction,
  getCapturedCategoryColorAction,
} from '../../../redux/actions/categoryActions';

import { modifyTodoAction } from '../../../redux/actions/todoActions';

import './ChooseCategoryForm.scss';

const ChooseCategoryForm = () => {
  //GET STATES FROM STORE
  const listofCategories = useSelector((state: RootState) => {
    return state.categoriesGlobal.categories;
  }, shallowEqual);

  const capturedTodoObject = useSelector((state: RootState) => {
    return state.todosGlobal.capturedTodoObject;
  }, shallowEqual);

  const capturedCategoryColor = useSelector((state: RootState) => {
    return state.categoriesGlobal.capturedCategoryColor;
  }, shallowEqual);

  //

  const dispatch = useDispatch();

  const newTodoObj = Object.assign(capturedTodoObject, {
    categoryColor: capturedCategoryColor,
  });

  return (
    <div className="ChooseCategory__Form">
      <div className="ChooseCategory__Wrapper">
        {listofCategories.map((category) => {
          return (
            <div
              onClick={() => {
                dispatch(
                  getCapturedCategoryObjectAction({
                    id: category.id,
                    name: category.name,
                    color: category.color,
                  })
                );

                dispatch(getCapturedCategoryColorAction(category.color));
              }}
            >
              <CategoryElement
                key={category.id}
                categoryId={category.id}
                categoryColor={category.color}
                categoryName={category.name}
                isModalStyle={true}
              />
            </div>
          );
        })}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="ChooseCategory__addbtn"
          onClick={() => dispatch(setModalType('Category'))}
        >
          <path
            id="plus-solid"
            d="M18.571,39.857H12.143V33.429A1.429,1.429,0,0,0,10.714,32H9.286a1.429,1.429,0,0,0-1.429,1.429v6.429H1.429A1.429,1.429,0,0,0,0,41.286v1.429a1.429,1.429,0,0,0,1.429,1.429H7.857v6.429A1.429,1.429,0,0,0,9.286,52h1.429a1.429,1.429,0,0,0,1.429-1.429V44.143h6.429A1.429,1.429,0,0,0,20,42.714V41.286A1.429,1.429,0,0,0,18.571,39.857Z"
            transform="translate(0 -32)"
            fill="#ccc"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          className="ChooseCategory__ticked-icon"
          onClick={() => {
            dispatch(modifyTodoAction(newTodoObj));
            dispatch(setModalType(''));
          }}
        >
          <g
            id="Group_10"
            data-name="Group 10"
            transform="translate(-523 -493)"
          >
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
      </div>
    </div>
  );
};

export default ChooseCategoryForm;
