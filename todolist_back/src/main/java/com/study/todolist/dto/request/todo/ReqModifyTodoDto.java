package com.study.todolist.dto.request.todo;

import com.study.todolist.entity.Todo;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class ReqModifyTodoDto {
    private int todoId;
    private int userId;
    private String title;
    private String content;
    private String todoDateTime;
    private int important;
    private int busy;
    private int status;


    public Todo toEntity() {
        return Todo.builder()
                .todoId(todoId)
                .userId(userId)
                .title(title)
                .content(content)
                .todoDateTime(LocalDateTime.parse(todoDateTime))
                .important(important)
                .busy(busy)
                .status(status)
                .build();
    }

}
