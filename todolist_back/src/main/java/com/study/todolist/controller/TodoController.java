package com.study.todolist.controller;

import com.study.todolist.dto.request.todo.ReqAddTodoDto;
import com.study.todolist.dto.request.todo.ReqModifyTodoDto;
import com.study.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping("/todo")
    public ResponseEntity<?> add(@RequestBody ReqAddTodoDto dto) {
        int successCount = todoService.addTodo(dto);
        return ResponseEntity.created(null).body(successCount);
    }

    @GetMapping("/todolist")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok().body(todoService.getTodoList());
    }

    @GetMapping("/todo/counts")
    public ResponseEntity<?> getCounts() {
        return ResponseEntity.ok().body(todoService.getTodoCounts());
    }

    @PutMapping("/todo/{todoId}/status")
    public ResponseEntity<?> changeStatus(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoService.changeStatus(todoId));
    }

    /*
    * ReqModifyTodoDto
    * modifyTodo => todoService
    * modifyTodoByTodoId => todoMapper
    * pathvariable 생략 가능한 이유 = reqdto에 todoId가 이미 있어서..?
    * */
    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> modify(@RequestBody ReqModifyTodoDto reqdto) {
        log.info("{}", reqdto);
        return ResponseEntity.ok().body(todoService.modifyTodo(reqdto));
    }
}











