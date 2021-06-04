import React from 'react';
import {StoreProvider} from './components/utils/Store';
import Todo from './components/todo/Todo';
import TodoForm from './components/todo/TodoForm';
import TodoListForm from './components/list/TodoListForm';


function App() {
  return <StoreProvider>
    
    <h3>To-Do List</h3>
    <TodoForm />
    <Todo />
    <h1>Aqui empieza el codigo</h1>
    <TodoListForm />
  </StoreProvider>
}
export default App;
