<template>
    <div>
        <p>Créer une nouvelle page de blog</p>
        
        <div id="form">
        <div>
            <p>Titre de la page</p>
            <input type="text" v-model="titlepage" placeholder="Titre de la page">
            <p>Meta Title</p>
            <input type="text" v-model="metatitle" placeholder="Meta Title">
            <p>Meta Description</p>
            <input type="text" v-model="metadesc" placeholder="Meta Description">
            </div>
            <div>
            <p>Ajouter une image</p>
            <input type="text" v-model="imageurl" placeholder="Ajouter une image">
            </div>
            <p>Corps du post</p>
            <input type="text" v-model="corps" placeholder="Corps du post">
            <button @click="nouvblog()">Créer la page</button>
        </div>
        
    </div>
</template>
<script>
    
    export default {
        name: 'createpage',
        data(){
            return{
                allPoste: this.$store.state.listeblog,
                titlepage:'',
                metatitle:'',
                metadesc:'',
                imageurl:'',
                corps:'',
            }
        },
        methods: {
            nouvblog() {
                let blog = {
                 nom : this.titlepage,
                 titre : this.metatitle,
                 desc  : this.metadesc,
                 img  : this.imageurl,
                 txt  : this.corps,
             
                }
                this.$store.commit('nouvblog',blog);
                this.$router.push('/admin')
            }
        }
    }
        

        

    
</script>

<style scoped>

</style>