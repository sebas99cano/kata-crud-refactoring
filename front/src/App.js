import React from 'react';
import { StoreProvider } from './components/utils/Store';

import TodoListForm from './components/list/TodoListForm';


function App() {
  return <StoreProvider>
    <div className="container text-center">
      <br />
      <div className="row border rounded">
        <h1>Aqui empieza el codigo</h1>
        <TodoListForm />
      </div>
      <br />
    </div>
  </StoreProvider>
}
export default App;
