package co.com.sofka.crud.controllers;

import co.com.sofka.crud.dto.TodoListDto;
import co.com.sofka.crud.services.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoListController {

    @Autowired
    private TodoListService service;

    @GetMapping(value = "api/list")
    public  Iterable<TodoListDto> list(){
        return service.list();
    }

    @PostMapping(value = "api/list")
    public TodoListDto save(@RequestBody TodoListDto todoListDto){
        return  service.save(todoListDto);
    }

    @PutMapping(value = "api/list")
    public TodoListDto update(@RequestBody TodoListDto todoListDto){
        if(todoListDto.getId() != null){
            return service.save(todoListDto);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/list")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/list")
    public TodoListDto get(@PathVariable("id") Long id){
        return service.get(id);
    }

}