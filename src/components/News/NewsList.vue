<template>
  <div class="tmpl">
   <nav-bar title="新闻列表"/>
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <router-link :to="{ name:'news.detail',query:{id:news.id} }">
          <img :src="news.img_url" alt="">
          <div>
            <span>{{news.title}}</span>
            <div class="news-desc">
              <p>点击数:{{news.click}}</p>
              <p>发表时间:{{news.add_time}}</p>
            </div>
          </div>
       </router-link>
      </li>
    </ul>
 
  </div>
</template>
<script>
export default {
  data () {
    return {
        newsList: []
    }
  },
  created () {
    this.$axios.get('getnewslist')
    .then( res=>{
      this.newsList = res.data.message;
    })
    .catch( err=> console.log("获取新闻列表失败",err))
  }
}
</script>
<style>
ul li{list-style: none;}
ul li:after{display: block;content: '';clear: both;}
ul li a{color:#323232;text-decoration: none;font-size: 14px;}
ul li a img{width: 20%;display: inline;}
ul li a>div{float: right;width: 80%;}
</style>
