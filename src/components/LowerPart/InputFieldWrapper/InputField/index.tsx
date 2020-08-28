import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';

import './InputField.scss';
import { RootState } from '../../../../redux/reducers';
import { addTodoAction } from '../../../../redux/actions/todoActions';
import { getCapturedCategoryColorAction } from '../../../../redux/actions/categoryActions';

const InputField = () => {
  const [inputContent, setInputContent] = useState('');

  const colorPicked = useSelector((state: RootState) => {
    return state.categoriesGlobal.capturedCategoryColor;
  });

  const dispatch = useDispatch();

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      let newTodoObj = {
        id: uuidv4(),
        description: inputContent,
        completed: false,
        categoryColor: colorPicked,
      };

      dispatch(addTodoAction(newTodoObj));
      dispatch(getCapturedCategoryColorAction('transparent'));
      setInputContent('');
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };

  return (
    <input
      className="InputField"
      type="text"
      placeholder="What's needed to be done?"
      onKeyPress={onKeyDownHandler}
      onChange={onChangeHandler}
      value={inputContent}
    />
  );
};

export default InputField;
