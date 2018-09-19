<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.img" alt="index">
      </mt-swipe-item>
    </mt-swipe>
    
    <div>
      <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
          <router-link :to="grid.router">
            <span :class="grid.className"></span>
            <div>{{grid.title}}</div>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: [],
      grids: [
           {className:'cms-news',title:'新闻资讯',router:{name:'news.list'}},
           {className:'cms-news',title:'图片分享',router:{name:'photo.list',params:{categoryId:0}}},
           {className:'cms-news',title:'商品展示',router:{name:'news.list'}},
           {className:'cms-news',title:'留言反馈',router:{name:'news.list'}},
           {className:'cms-news',title:'搜索资讯',router:{name:'news.list'}},
           {className:'cms-news',title:'联系我们',router:{name:'news.list'}},
           ]
    }
  },
  //created 创建时加载banner图片 可以操作数据
  created () {
    this.$axios.get('getlunbo')
    .then(res=>{
        this.imgs = res.data.message;
        console.log(res.data.message)
    })
    .catch(err=> console.log('轮播图获取失败',err))
  }
}
</script>
<style scoped>
  .mint-swipe{
    height: 200px;
  }
  img{
    width: 100%;
  }
 a{
   text-decoration: none;
   color: #332323;
 }
  
  .cms-news{
    display: inline-block;
    height: 50px;
    width: 50px;
  }
  ul li:nth-child(1) span {
    background-image: url(../../assets/img/news1.png);
    background-size: 100% 100%;
  }
  ul li:nth-child(2) span {
    background-image: url(../../assets/img/news2.png);
    background-size: 100% 100%;
  }
  ul li:nth-child(3) span {
    background-image: url(../../assets/img/news3.png);
    background-size: 100% 100%;
  }
  ul li:nth-child(4) span {
    background-image: url(../../assets/img/news4.png);
    background-size: 100% 100%;
  }
  ul li:nth-child(5) span {
    background-image: url(../../assets/img/news5.png);
    background-size: 100% 100%;
  }
  ul li:nth-child(6) span {
    background-image: url(../../assets/img/news6.png);
    background-size: 100% 100%;
  }
</style>
