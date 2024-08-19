import { atom } from "recoil";

export const selectedCalendarTodoAtom = atom({
    key: "selectedCalendarToddState",
    default: 0
});

export const modifyTodoAtom = atom({
    key: "modifyTodoState",
    default: {}
});