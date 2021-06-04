package co.com.sofka.crud.mapper;

import co.com.sofka.crud.dto.TodoDto;
import co.com.sofka.crud.entity.Todo;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface TodoMapper {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "completed", target = "completed"),
            @Mapping(source = "groupListId", target = "groupListId")
    })
    TodoDto toTodoDto(Todo todo);
    Iterable<TodoDto> toTodoDto (Iterable<Todo> todos);

    @InheritInverseConfiguration
    Todo toTodo(TodoDto todoDto);
}
