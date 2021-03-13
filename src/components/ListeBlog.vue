<template>
    <div>
    <button @click="rediction()">Créer une page</button>
    <ul>
        <li class="leblog" v-for="blog in listeblog" :key="blog">
            <img src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg" class="imgblog" alt="">
            <p class="titleblog">{{blog.titre}}</p>
            <button>Editer</button>
            <button>X</button>
        </li>
    </ul>
    </div>
</template>


<script>
export default {

    data(){
        return{
             allPoste: this.$store.state.listeblog
        }
    },

    methods:{
        rediction(){
            this.$router.push('/create')
        }
        
    }
}


</script>



<style scoped>

.leblog{
    width: 60%;
    margin-left: 20%;
    height: 125px;
    border: 1px solid grey;
}

ul li{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

ul li img{
    width: 20%;
    height: 75%;
    margin-top: 15px;
}

ul li .titleblog{
    width: 50%;
    text-align: left;
    margin-top: 30px;
}

ul li button{
    height: 40px;
    margin-top: 30px;
}

ul li :nth-child(3){
    background-color: rgb(206, 146, 67);
}

ul li :last-child{
    background-color: rgb(206, 67, 67);
}

</style>