import { instance } from "../utils/instance";

export async function getTodoAllApi() {
    let response = null;
    try {
        response = await instance.get("/todolist");
    }catch(e) {
        console.error(e);
        response = e.response;
    }
    return response;
}

export async function getTodoCountsApi() {
    let response = null;
    try {
        response = await instance.get("/todo/counts");
    }catch(e) {
        console.error(e);
        response = e.response;
    }
    return response;
}