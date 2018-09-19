<template>
  <div class="tmpl">
    <nav-bar title="新闻详情"/>
    <div class="news-title">
      <p>{{newsDetail.title}}</p>
      <div>
        <span>{{newsDetail.click}}次点击</span>
        <span>分类：{{newsDetail.title}}</span>
        <span>添加时间：{{newsDetail.add_time}}</span>
      </div>
    </div>
    <div class="news-content" v-html="newsDetail.content">新闻明细</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
        newsDetail: {}
    }
  },
  created () {
    let id = this.$route.query.id;
    this.$axios.get('getnew/' + id)
    .then( res => {
        this.newsDetail = res.data.message[0];
    })
    .catch( err => console.log("获取新闻详情失败",err))
  },
}
</script>
<style>
ul li{list-style: none;}
ul li:after{display: block;content: '';clear: both;}
ul li a{color:#323232;text-decoration: none;font-size: 14px;}
ul li a img{width: 20%;display: inline;}
ul li a>div{float: right;width: 80%;}
</style>
