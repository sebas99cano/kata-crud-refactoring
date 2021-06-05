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

    const onDelete = (id) => {
        fetch(HOST_API + "/" + id + "/list", {
            method: "DELETE"
        }).then((list) => {
            dispatch({ type: "delete-todolist", id })
        })
    };

    return <div className=" container text-center">
        {currentTodoList.map((elemento) => {
            return <div key={elemento.id} className="row border rounded">
                <div className="input-group mb-3">
                    <span className="input-group-text">Nombre de la TodoList</span>
                    <input type="text" className="form-control" disabled={true} value={elemento.name} />
                    <button onClick={() => onDelete(elemento.id)} className="btn btn-outline-danger">Eliminar</button>
                </div>
                <TodoForm TodoListId={elemento.id} />
                <Todo TodoListId={elemento.id} />
            </div>
        })}
    </div>

}

export default TodoList;