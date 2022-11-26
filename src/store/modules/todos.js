import axios from "axios";

const state = {
    todos: [],
    doneJobs:[]
}


const actions = {
    async deleteJob({commit}, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('DELETE_JOBS', id)
    },
    mark_completed({commit}, id) {
        commit('MARK_COMPLETE', id)
    },
    async addJob({commit}, newJob) {
        await axios.post(`https://jsonplaceholder.typicode.com/todos`, newJob)
        commit('ADD_JOBS', newJob)
    },
    async getJob({commit}) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        commit("LIST_JOB", res.data)
    },
    doneJobs({commit}){
        console.log(1111111111)
        commit('DONE_JOBS')
    }
}

const mutations = {
    MARK_COMPLETE(state, todoId) {
        state.todos.map(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed
            }
            return todo;
        })
    },
    DELETE_JOBS(state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id)
    },
    ADD_JOBS(state, newTodo) {
        state.todos.unshift(newTodo)
    },
    LIST_JOB(state, listJob) {
        state.todos = listJob
    },
    DONE_JOBS(state){
        state.doneJobs=[{id:1,title:'fdsfjreuif',completed:true}]
    }
}

export default {
    state,actions,mutations
}
