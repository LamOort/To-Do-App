import React, { useState } from 'react';

import Header from '../components/UpperPart/Header';
import ProgressionBar from '../components/UpperPart/ProgressionBar';
import CategoryBar from '../components/UpperPart/CategoryBar';
import InputFieldWrapper from '../components/LowerPart/InputFieldWrapper';
import ToDoList from '../components/LowerPart/ToDoList';

import './App.scss';
import StatusBar from '../components/StatusBar';

const App = () => {
  return (
    <div className="App">
      <div className="BoxShadow">
        <div className="UpperPartWrapper">
          <Header />
          <CategoryBar />
          <ProgressionBar completion={15} />
        </div>
      </div>

      <div className="LowerPartWrapper">
        <InputFieldWrapper />
        <ToDoList />
      </div>
      {/* <StatusBar /> */}
    </div>
  );
};

export default App;
