package co.com.sofka.crud.services;

import co.com.sofka.crud.dto.TodoListDto;

public interface InterfaceTodoListService {
    Iterable<TodoListDto> list();

    TodoListDto save(TodoListDto todoListDto);

    void delete(Long id);

    TodoListDto get(Long id);
}
