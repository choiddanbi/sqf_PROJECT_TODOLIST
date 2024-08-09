import { atom } from "recoil";
import { getTodoAllApi } from "../apis/todoApis/getTodoApi";

export const todolistAtom = atom({
    key: "todolistState",
    default: {
        todolist: [],
        counts: {
            all: 0,
            today: 0,
            important: 0,
            busy: 0,
            complete: 0
        },
    },
});

export const refreshTodolistAtom = atom({
    key: "refreshTodolistState",
    default: true,
});