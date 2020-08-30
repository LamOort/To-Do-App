import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { RootState } from '../../../../redux/reducers';
import {
  addTodoAction,
  getCapturedColorForTodoAction,
} from '../../../../redux/actions/todoActions';

import './InputField.scss';

const InputField = () => {
  const [inputContent, setInputContent] = useState('');

  const colorPicked = useSelector((state: RootState) => {
    return state.todosGlobal.capturedColorForTodo;
  });

  const dispatch = useDispatch();

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      if (colorPicked === '') {
        alert('Please pick a color for your new todo task');
        setInputContent('');
      } else {
        let newTodoObj = {
          id: uuidv4(),
          description: inputContent,
          completed: false,
          categoryColor: colorPicked,
        };

        dispatch(addTodoAction(newTodoObj));
        dispatch(getCapturedColorForTodoAction('transparent'));
        setInputContent('');
      }
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
