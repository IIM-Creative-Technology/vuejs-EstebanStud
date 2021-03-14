import { createStore } from 'vuex'

export default createStore({
    state: {
        listeblog: [{
            nom: 'titlepage',
            titre: 'title',
            desc: 'desc',
            img: '',
            corps: 'contenu',
            id: "0",
        }]
    },
    mutations: {
        nouvblog(state, blog) {
            state.listeblog.push(blog);
        },
        updatepost(state, blog) {
            for (let i = 0; i < state.listeblog.length; i++) {
                if (state.listeblog[i].id === blog.id) {
                    state.listeblog[i] = blog;
                }
            }
            state.listeblog[blog.id] = blog;
        },
    },
    //actions: {},
    //modules: {}
})