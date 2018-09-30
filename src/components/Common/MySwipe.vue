<template>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.img||img.src" alt="index">
      </mt-swipe-item>
    </mt-swipe>
</template>
<script>
    export default {
        name: 'my-swipe',
        props: ['url'],
        methods: {
           
        },
        data () {
            return {
                imgs:[],
            }
        },
        created () {
            this.$axios.get(this.url)
            .then(res=>{
                this.imgs = res.data.message;
            })
            .catch(err=> console.log('轮播图获取失败',err))
        },
    }
</script>
<style scoped>
.mint-swipe{
    height: 200px;
  }
  img{
    width: 100%;
    height: 200px;
  }
</style>
