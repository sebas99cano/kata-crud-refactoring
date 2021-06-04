package co.com.sofka.crud.services;

import co.com.sofka.crud.dao.TodoListRepository;
import co.com.sofka.crud.dao.TodoRepository;
import co.com.sofka.crud.dto.TodoDto;
import co.com.sofka.crud.dto.TodoListDto;
import co.com.sofka.crud.entity.TodoList;
import co.com.sofka.crud.mapper.TodoListMapper;
import co.com.sofka.crud.mapper.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class TodoListService implements InterfaceTodoListService{

    @Autowired
    private TodoListRepository todoListRepository;

    @Autowired
    private TodoListMapper todoListMapper;

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private TodoMapper todoMapper;

    @Override
    public Set<TodoDto> listTodoByListIb(Long id) {
        Set<TodoDto> todoDto = new HashSet<>();
        todoRepository.findAll().forEach(todo -> {
            if (todo.getGroupListId().equals(id)){
                todoDto.add(todoMapper.toTodoDto(todo));
            }
        });
        return todoDto;
    }

    @Override
    public Iterable<TodoListDto> list() {
        Iterable<TodoList> todoList = todoListRepository.findAll();
        return todoListMapper.toTodoListDto(todoList);
    }

    @Override
    public TodoListDto save(TodoListDto todoListDto) {
        TodoList todoList = todoListMapper.toTodoList(todoListDto);
        return todoListMapper.toTodoListDto(todoListRepository.save(todoList));
    }

    @Override
    public void delete(Long id) {
        todoListRepository.delete(todoListMapper.toTodoList(get(id)));
    }

    @Override
    public TodoListDto get(Long id) {
        TodoList todoList = todoListRepository.findById(id).orElseThrow();
        return todoListMapper.toTodoListDto(todoList);
    }
}
