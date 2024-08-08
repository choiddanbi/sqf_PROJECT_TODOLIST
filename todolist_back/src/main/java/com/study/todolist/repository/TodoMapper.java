package com.study.todolist.repository;

import com.study.todolist.entity.Todo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TodoMapper {
    int save(Todo todo);
}
