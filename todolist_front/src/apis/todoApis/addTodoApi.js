import { instance } from "../utils/instance";

export async function addTodoApi(data) {
    let response = null;
    try {
        response = await instance.post("/todo", data);
    } catch(e) {
        console.error(e);
        response = e.response;
    }
    return response;
}