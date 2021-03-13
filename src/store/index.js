import { createStore } from 'vuex'

export default createStore({
    state: {
        listeblog: []
    },
    mutations: {
        nouvblog(state, blog) {
            state.listeblog.push(blog);
            //alert('ca marche')
        }
    },
    actions: {},
    modules: {}
})