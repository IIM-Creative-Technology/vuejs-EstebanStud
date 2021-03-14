import { createStore } from 'vuex'

export default createStore({
    state: {
        listeblog: [{
            nom: 'titlepage',
            titre: 'title',
            desc: 'desc',
            img: '',
            corps: 'contenu',
        }]
    },
    mutations: {
        nouvblog(state, blog) {
            state.listeblog.push(blog);
            console.log(this.listeblog);
        }
    },
    //actions: {},
    //modules: {}
})