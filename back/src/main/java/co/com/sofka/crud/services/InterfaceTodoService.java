package co.com.sofka.crud.services;

import co.com.sofka.crud.dto.TodoDto;

public interface InterfaceTodoService {
    Iterable<TodoDto> list();

    TodoDto save(TodoDto todoDto);

    void delete(Long id);

    TodoDto get(Long id);
}
