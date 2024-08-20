import { instance } from "../utils/instance";

export async function deleteTodoApi(todoId) {
    let response = null;

    try {
        response = await instance.delete(`/todo/${todoId}`);
    } catch(e) {
        console.error(e);
        response = e.response;
    }
    
    return response;
}