<template>
    <div>
        <button @click="editionPost()">editer</button>
        <div id="form" :style="{display: displayedit}">
            <div>

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
            <button @click="editvalid(id)">editer le post</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Edition',
        props: ["id"],
        data() {
            return {
                displayedit: 'none',
                titlepage: '',
                metatitle: '',
                metadesc: '',
                imageurl: '',
                corps: '',
            }
        },
        methods: {
            editvalid(id) {
                let blog = {

                    nom: this.titlepage,
                    titre: this.metatitle,
                    desc: this.metadesc,
                    img: this.imageurl,
                    txt: this.corps,
                    id: id,
                }
                this.$store.commit('updatepost', blog);
            },
            editionPost() {
                if (this.displayedit === "none") {
                    this.displayedit = "block";
                } else {
                    this.displayedit = "none";
                }
            }

        }

    }
</script>

<style scoped>

</style>