import React from 'react';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '../../../redux/reducers';

import CategoryElement from '../../UpperPart/CategoryBar/CategoryElement';
import { setModalType } from '../../../redux/actions/modalActions';

import {
  getCapturedCategoryIdAction,
  getCapturedCategoryObjectAction,
} from '../../../redux/actions/categoryActions';

import './ChooseCategoryForm.scss';
import { Category } from '../../../types';
import { modifyTodoAction } from '../../../redux/actions/todoActions';

const ChooseCategoryForm = () => {
  const listofCategories = useSelector((state: RootState) => {
    return state.categoriesGlobal.categories;
  }, shallowEqual);

  const capturedTodoObject = useSelector((state: RootState) => {
    return state.todosGlobal.capturedTodoObject;
  }, shallowEqual);

  const dispatch = useDispatch();

  function changeTodoColorByCategoryColor() {
    return async (dispatch: any, getState: any) => {
      let stateSnapshot = getState();
      const capturedCategoryObject = await stateSnapshot.capturedTodoObject;

      const newTodoObj = Object.assign(
        capturedTodoObject,
        capturedCategoryObject.color
      );
      dispatch(modifyTodoAction(newTodoObj));

      dispatch(setModalType(''));
    };
  }

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
                changeTodoColorByCategoryColor();
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
      </div>
    </div>
  );
};

export default ChooseCategoryForm;
