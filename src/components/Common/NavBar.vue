<template>
    <div class="newsTitle">
        <h1 class="ret" @click="goback"> <&nbsp; </h1>
        <h1>{{title}}</h1>
    </div>
</template>
<script>
    export default {
        name: 'nav-bar',
        props: ['title'],
        methods: {
            goback () {
                this.$router.go(-1)
            }
        },
        data () {
            return {

            }
        }
    }
</script>
<style scoped>
  h1{
   display: inline-block;
   margin: 0;
  }
  .ret{position: absolute;left: 0;}
  .newsTitle{
      position: relative;
      top: 30px;
      left: 0;
      text-align: center;
      background:#ffffff;
  }
</style>
