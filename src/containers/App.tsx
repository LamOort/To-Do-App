import React, { useState, useEffect } from 'react';

import Header from '../components/UpperPart/Header';
import ProgressionBar from '../components/UpperPart/ProgressionBar';
import CategoryBar from '../components/UpperPart/CategoryBar';
import InputFieldWrapper from '../components/LowerPart/InputFieldWrapper';
import ToDoList from '../components/LowerPart/ToDoList';

import './App.scss';
import StatusBar from '../components/StatusBar';
import PopUpModal from '../components/PopUpModal';
import { useDispatch } from 'react-redux';
import { setModalType } from '../redux/actions/modalActions';

const App = React.memo(() => {
  //** RECEIVE FILTER DATA FROM CHILD COMPONENT (Status Bar)
  //SetSelectedFilter is a callback

  const [selectedFilter, setSelectedFilter] = useState('all');
  //----------------------------------------------------------------

  //** PASS FILTER DATA RECEIVED FROM CALLBACK TO A VARIABLE THEN PASS IT AS A PROP TO TODOLIST COMPONENT, TODOLIST CONTENT WILL BE RENDERED BASE ON THE FILTER STATE
  const filterClickedData = selectedFilter;
  //----------------------------------------------------------------

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModalType());
  });

  return (
    <div className="App">
      <div className="BoxShadow">
        <div className="UpperPartWrapper">
          <Header />
          <CategoryBar />
        </div>
        <ProgressionBar />
      </div>

      <div className="LowerPartWrapper">
        <InputFieldWrapper />
        <ToDoList filterNameHasBeenClicked={filterClickedData} />
      </div>
      <StatusBar clickedFilter={setSelectedFilter} />
      <PopUpModal />
    </div>
  );
});

export default App;
