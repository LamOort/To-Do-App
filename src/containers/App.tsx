import * as React from 'react';

import Header from '../components/UpperPart/Header';
import ProgressionBar from '../components/UpperPart/ProgressionBar';
import CategoryBar from '../components/UpperPart/CategoryBar';
import InputFieldWrapper from '../components/LowerPart/InputFieldWrapper';
import ToDoList from '../components/LowerPart/ToDoList';

import './App.scss';
import StatusBar from '../components/StatusBar';
import PopUpModal from '../components/PopUpModal';

const App = () => {
  return (
    <div className="App">
      <PopUpModal />
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
      <StatusBar />
    </div>
  );
};

export default App;
