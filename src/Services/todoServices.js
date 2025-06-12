import axios from "axios";

//get user token
const user = JSON.parse(localStorage.getItem("todoapp"));

//default auth header
axios.defaults.headers.common["Authorization"] = `bearer ${user.token}`; 

const createTodo=(data)=>{
    return axios.post("/todo/create",data)
}
const getAllTodo=(id)=>{
    return axios.post(`/todo/getAll/${id}`)
}
const updateTodo=(id,data)=>{
    return axios.patch("/todo/update/"+id,data)
}

const deleteTodo=(id)=>{
    return axios.post(`/todo/delete/${id}`)
}

const TodoServices={createTodo,getAllTodo,updateTodo,deleteTodo}
export default TodoServices