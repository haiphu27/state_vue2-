const state ={
    auth: {
        isAuthenticated: false
    }
}

const actions ={}

const mutations ={
    TOGGLE_AUTH(state) {
        state.auth.isAuthenticated = !state.auth.isAuthenticated
    },
}
export default{
    state,
    actions,
    mutations
}


