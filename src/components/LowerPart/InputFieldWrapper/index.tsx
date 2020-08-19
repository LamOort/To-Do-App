import * as React from 'react';
import InputField from './InputField';
import './InputFieldWrapper.scss';

const InputFieldWrapper = () => {
  return (
    <div className="InputFieldWrapper">
      <button className="square-button"></button>
      <InputField />
    </div>
  );
};

export default InputFieldWrapper;
