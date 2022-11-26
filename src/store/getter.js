const getters={
    //stateTodo
    todos:state=>state.todos.todos,
    doneTodos: state =>state.todos.todos.filter(todo=>todo.completed),
    progress: (state, getters) => Math.round((getters.doneTodos.length / state.todos.todos.length) * 100),
    //stateAuth
    isAuthenticated:state=>state.auth.auth.isAuthenticated
}


export default getters
