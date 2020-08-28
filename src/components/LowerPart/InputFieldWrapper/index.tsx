import React, { useEffect } from 'react';
import InputField from './InputField';

import { useDispatch, useSelector } from 'react-redux';
import { setModalType } from '../../../redux/actions/modalActions';
import { RootState } from '../../../redux/reducers';

import './InputFieldWrapper.scss';
import { getCapturedCategoryColorAction } from '../../../redux/actions/categoryActions';

const InputFieldWrapper = () => {
  const colorChosen = useSelector((state: RootState) => {
    return state.categoriesGlobal.capturedCategoryColor;
  });

  const dispatch = useDispatch();

  return (
    <div className="InputFieldWrapper">
      <button
        className="square-button"
        type="button"
        style={{ backgroundColor: colorChosen }}
        onClick={() => dispatch(setModalType('ChooseCategory'))}
      ></button>
      <InputField />
    </div>
  );
};

export default InputFieldWrapper;
