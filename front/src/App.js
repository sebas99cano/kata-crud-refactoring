import React from 'react';
import { StoreProvider } from './components/utils/Store';

import TodoListForm from './components/list/TodoListForm';
import TodoList from './components/list/TodoList';


function App() {
  return <StoreProvider>
    <div className="container">
      <br />
      <div className="row border rounded">
        <h1>Aqui empieza el codigo</h1>
        <TodoListForm />
      </div>
      <br />
    </div>
    <TodoList/>
  </StoreProvider>
}
export default App;
