import { atom } from "recoil";

export const selectedCalendarTodoAtom = atom({
    key: "selectedCalendarToddState",
    default: 0
});

export const modifyTodoAtom = atom({
    key: "modifyTodoState",
    default: {
        todoId: 0,
        title: "",
        content: "",
        todoDateTime: "",
        important: 1,
        busy: 1
    }
});