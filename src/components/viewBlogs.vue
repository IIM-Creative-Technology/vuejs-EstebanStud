<template>
<div>
    <div v-for="blog in allPoste" :key="blog">
        <ul>
            <li class="leblog">
                <img src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg"
                    class="imgblog" alt="">
                <p class="titleblog">{{blog.nom}}</p>
                <p class="titleblog">{{blog.titre}}</p>
                <p class="titleblog">{{blog.desc}}</p>
                <p class="titleblog">{{blog.txt}}</p>
                <Edition :id="blog.id"></Edition>
            </li>
        </ul>
    </div>
</div>
</template>


<script>

    export default {
        name: 'Blogview',
        data() {
            return {
                allPoste: this.$store.state.listeblog
            }
        }
    }
</script>



<style scoped>
    .leblog {
        width: 60%;
        margin-left: 20%;
        height: 125px;
        border: 1px solid grey;
    }

    ul li {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    ul li img {
        width: 20%;
        height: 75%;
        margin-top: 15px;
    }

    ul li .titleblog {
        width: 50%;
        text-align: left;
        margin-top: 30px;
    }

    ul li button {
        height: 40px;
        margin-top: 30px;
    }

    ul li :nth-child(3) {
        background-color: rgb(206, 146, 67);
    }

    ul li :last-child {
        background-color: rgb(206, 67, 67);
    }
</style>