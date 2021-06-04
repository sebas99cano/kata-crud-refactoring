package co.com.sofka.crud.dto;

import java.util.Set;

public class TodoListDto {
    private Long id;
    private String name;
    private Set<TodoDto> todoDto;

    public Set<TodoDto> getTodoDto() {
        return todoDto;
    }

    public void setTodoDto(Set<TodoDto> todoDto) {
        this.todoDto = todoDto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
