<template>
  <div class="tmpl">
    <nav-bar title="图文详情" ref="child"/>
    <div>
        <h4>{{info.title}}</h4>
        <span>发起日期:{{info.add_time}}</span>
        <span>{{info.click}}次浏览</span>
        <span>分类信息</span>
    </div>
    <ul class="imgSlides">
        <vue-preview :slides="imgs"></vue-preview>
        <!-- <li v-for="(img,index) in imgs" :key="index">
            <img :src="img.src" alt="">
        </li> -->
    </ul>
    <div>
        <p v-html="info.content"></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
        imgs: [],
        info: {},
    }
  },
  created () {
    let id = this.$route.query.id;
    this.$axios.get('getimageInfo/' + id)
    .then( res => {
        this.info = res.data.message[0];
    })
    .catch( err => console.log("获取分类失败",err))

    this.$axios.get('getthumimages/' + id)
    .then(res => {
       this.imgs = res.data.message;
       this.imgs.forEach(img => {
           img.msrc = img.src;
           img.w = 600;
           img.h = 400;
       });
    })
    .catch( err => console.log("获取图片失败",err))
  },
  methods:{
     
  }
}
</script>
<style scoped>

</style>
