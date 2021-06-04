package co.com.sofka.crud.services;

import co.com.sofka.crud.dto.TodoDto;
import co.com.sofka.crud.dto.TodoListDto;

import java.util.Set;

public interface InterfaceTodoListService {
    Set<TodoDto> listTodoByListIb(Long id);

    Iterable<TodoListDto> list();

    TodoListDto save(TodoListDto todoListDto);

    void delete(Long id);

    TodoListDto get(Long id);
}
