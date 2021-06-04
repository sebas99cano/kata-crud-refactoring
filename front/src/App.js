import React from 'react';
import {StoreProvider} from './Store';
import TodoList from './components/todo/TodoList';
import TodoForm from './components/todo/TodoForm';


function App() {
  return <StoreProvider>
    
    <h3>To-Do List</h3>
    <TodoForm />
    <TodoList />
  </StoreProvider>
}
export default App;
