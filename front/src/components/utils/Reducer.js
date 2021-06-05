function reducer(state, action) {
    switch (action.type) {
        //prueba

        //casos de los todoList
        case 'todolist':
            const todoList = state.todoList;
            todoList.list = action.list;
            return { ...state, todoList: todoList };

        case 'todolist-add':
            const todoListAdd = state.todoList.list;
            todoListAdd.push(action.todoList);
            return { ...state, todoList: todoListAdd };
        //casos de los todos
        case 'update-item':
            const todoUpItem = state.todo;
            const listUpdateEdit = todoUpItem.list.map((item) => {
                if (item.id === action.item.id) {
                    return action.item;
                }
                return item;
            });
            todoUpItem.list = listUpdateEdit;
            todoUpItem.item = {};
            return { ...state, todo: todoUpItem }

        case 'delete-item':
            const todoUpDelete = state.todo;
            const listUpdate = todoUpDelete.list.filter((item) => {
                return item.id !== action.id;
            });
            todoUpDelete.list = listUpdate;
            return { ...state, todo: todoUpDelete }

        case 'edit-item':
            const todoUpEdit = state.todo;
            todoUpEdit.item = action.item;
            return { ...state, todo: todoUpEdit }

        case 'add-item':
            const todoUp = state.todo.list;
            todoUp.push(action.item);
            return { ...state, todo: { list: todoUp, item: {} } }

        case 'update-list':
            const todoUpList = state.todo;
            todoUpList.list = action.list;
            return { ...state, todo: todoUpList }

        default:
            return state;
    }
}
export default reducer;