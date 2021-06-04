import React from 'react';
import {StoreProvider} from './Store';
import List from './components/todo/TodoList';
import Form from './components/todo/TodoForm';


function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}

export default App;
