import axios from 'axios'

class TodoService {

    getTodos(username) {
        //send get request
        return axios.get(`http://localhost:8080/users/${username}/todos`)
    }

    deleteTodo(username, id) {
        //send delete request
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
    }
}

export default new TodoService();