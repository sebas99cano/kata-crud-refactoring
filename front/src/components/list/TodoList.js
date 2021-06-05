import React, { useContext, useEffect } from 'react';
import Store from '../utils/Store';
import Todo from '../todo/Todo';
import TodoForm from '../todo/TodoForm';

const HOST_API = "http://localhost:8080/api";

const TodoList = () => {
  const { dispatch, state: { todoList } } = useContext(Store);
  const currentTodoList = todoList.list;

  useEffect(() => {
    fetch(HOST_API + "/list")
      .then(response => response.json())
      .then((list) => {
        dispatch({ type: "todolist", list })
      })
  }, [dispatch]);

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked
    };
    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
      });
  };

  return<div>
        {currentTodoList.map((elemento) => {
          return <div key={elemento.id}>
            <TodoForm/>
            <Todo/>
          </div>
        })}
    </div>
  
}

export default TodoList;