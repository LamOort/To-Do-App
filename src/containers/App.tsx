import React, { useState } from 'react';

import Header from '../components/UpperPart/Header';
import ProgressionBar from '../components/UpperPart/ProgressionBar';
import CategoryBar from '../components/UpperPart/CategoryBar';
import InputFieldWrapper from '../components/LowerPart/InputFieldWrapper';
import ToDoList from '../components/LowerPart/ToDoList';

import './App.scss';
import StatusBar from '../components/StatusBar';
import PopUpModal from '../components/PopUpModal';

const App = React.memo(() => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterClickedData = selectedFilter;
  return (
    <div className="App">
      <div className="BoxShadow">
        <div className="UpperPartWrapper">
          <Header />
          <CategoryBar />
          <ProgressionBar />
        </div>
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
