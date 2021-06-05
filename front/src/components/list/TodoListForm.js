import React, { useContext, useRef, useState } from 'react';
import Store from '../utils/Store';

const HOST_API = "http://localhost:8080/api";

const TodoListForm = () => {

    const formRef = useRef(null);
    const { dispatch, state: { todoList } } = useContext(Store);
    const item = todoList.item;
    const [state, setState] = useState(item);

    const onAdd = (event) => {
        event.preventDefault();
        const request = {
            name: state.name,
            id: null
        };

        fetch(HOST_API + "/list", {
            method: "POST",
            body: JSON.stringify(request),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
            .then((todoList) => {
                dispatch({ type: "todolist-add", item: todoList });
                setState({ name: "" });
                formRef.current.reset();
            });
    }

    return <form ref={formRef} className="form">
        <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Agrega una nueva lista de tareas"
            onChange={(event) => {
                setState({ ...state, name: event.target.value })
            }}  ></input>
        <br />
        <button onClick={onAdd} className="btn btn-primary">Crear nueva lista de tareas</button>
        <br />
    </form>
}

export default TodoListForm;