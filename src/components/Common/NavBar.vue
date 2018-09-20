<template>
    <div class="newsTitle">
        <h2 class="ret" @click="goback"> <&nbsp; </h2>
        <h4>{{title}}</h4>
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
  h2,h4{
   display: inline-block;
   margin: 0;
  }
  .ret{position: absolute;left: 0;}
  .newsTitle{
      position: fixed;
      top: 40px;
      left: 0;
      text-align: center;
      background:#ffffff;
      width: 100%;
      line-height: 30px;
  }
</style>
