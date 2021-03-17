<template>
  <div class="about">
    <ul>
            <li class="leblog">
                <!--<img src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg"
                    class="imgblog" alt="">-->
                <p class="titleblog">{{blog.nom}}</p>
                <p class="titleblog">{{blog.titre}}</p>
                <p class="titleblog">{{blog.desc}}</p>
                <p class="titleblog">{{blog.txt}}</p>
            </li>
        </ul>
  </div>
</template>

<script>

export default {
  name: 'Article',

    data(){
        return{
            blog: this.$store.state.listeblog[this.$route.params.id]
        }
    }
  
}
</script>

<style scoped>

</style>