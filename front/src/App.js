import React from 'react';
import {StoreProvider} from './components/utils/Store';
import Todo from './components/todo/TodoList';
import TodoForm from './components/todo/TodoForm';


function App() {
  return <StoreProvider>
    
    <h3>To-Do List</h3>
    <TodoForm />
    <Todo />
  </StoreProvider>
}
export default App;
