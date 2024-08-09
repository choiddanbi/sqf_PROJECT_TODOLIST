package com.study.todolist.repository;

import com.study.todolist.entity.Todo;
import com.study.todolist.entity.TodoCounts;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoMapper {
    int save(Todo todo);
    List<Todo> findAll();
    TodoCounts getTodoCounts();
}
