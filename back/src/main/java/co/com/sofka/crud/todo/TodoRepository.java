package co.com.sofka.crud.todo;

import co.com.sofka.crud.todo.Todo;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Long> {
}
