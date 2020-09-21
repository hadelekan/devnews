export const state = () => {
    auth: {}
    selectedPost:{}
}

export const getters = {
    
}

export const mutations = {
    userLoggedIn(state, user){
        state.auth.user = user
        state.auth.loggedIn = user.status
    },
    setSelectedPost(state, post){
        state.selectedPost = post
    }   
}

export const actions = {
    loggedIn({commit}){
        commit('userLoggedIn')
    }
}