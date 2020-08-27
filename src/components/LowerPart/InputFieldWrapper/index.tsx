import * as React from 'react';
import InputField from './InputField';
import './InputFieldWrapper.scss';
import { useDispatch } from 'react-redux';
import { setModalType } from '../../../redux/actions/modalActions';

const InputFieldWrapper = () => {
  const dispatch = useDispatch();

  return (
    <div className="InputFieldWrapper">
      <button
        className="square-button"
        type="button"
        onClick={() => dispatch(setModalType('ChooseCategory'))}
      ></button>
      <InputField />
    </div>
  );
};

export default InputFieldWrapper;
