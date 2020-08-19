import * as React from 'react';
import ToDoItem from './ToDoItem';

import './ToDoList.scss';

const ToDoList = () => {
  return (
    <div className="ToDoList">
      <ToDoItem
        categoryColor="#FF3838"
        toDoContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero libero, scelerisque tempus neque eu, scelerisque pharetra ante. Vestibulum aliquet nunc a sapien malesuada, vitae faucibus dolor venenatis. Duis nunc tellus, tincidunt vitae consectetur sit amet, semper eu dolor. "
      />
      <ToDoItem
        categoryColor="#FF3838"
        toDoContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero libero, scelerisque tempus neque eu, scelerisque pharetra ante. "
      />
      <ToDoItem categoryColor="#FF3838" toDoContent="Make my bed" />
      <ToDoItem
        categoryColor="#FF3838"
        toDoContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero libero, scelerisque tempus neque eu, scelerisque pharetra ante. "
      />
      <ToDoItem
        categoryColor="#FF3838"
        toDoContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero libero, scelerisque tempus neque eu, scelerisque pharetra ante. "
      />
      <ToDoItem
        categoryColor="#FF3838"
        toDoContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero libero, scelerisque tempus neque eu, scelerisque pharetra ante. "
      />
      <ToDoItem
        categoryColor="#FF3838"
        toDoContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero libero, scelerisque tempus neque eu, scelerisque pharetra ante. "
      />

      <ToDoItem
        categoryColor="#FF3838"
        toDoContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero libero, scelerisque tempus neque eu, scelerisque pharetra ante. "
      />
      <ToDoItem
        categoryColor="#FF3838"
        toDoContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero libero, scelerisque tempus neque eu, scelerisque pharetra ante. "
      />
    </div>
  );
};

export default ToDoList;
