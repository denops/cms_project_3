<template>
  <div class="tmpl">
    <nav-bar title="图文分享" ref="child"/>
    <div>
        <ul>
            <li v-for=" c in categorys" :key="c.id">
                <a @click="getCategory(c.id)" href="javascript:;">{{c.title}}</a>
            </li>
        </ul>
    </div>
    <div class="photo-list">
        <ul>
            <li v-for="img in imgs" :key="img.id">
                <a href="">
                    <img v-lazy="img.img_url" alt="">
                    <p>
                        <h4>{{img.title}}</h4>
                        <span>{{img.zhaiyao}}</span>
                    </p>
                </a>
            </li>
        </ul>
    </div>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
        imgs: [],
        categorys: []
    }
  },
  beforeRouteUpdate (to, from, next) {
      console.log("router:",to);
     this.getCategory(to.params.categoryId)
     next();
  },
  created () {
    let id = this.$route.params.categoryId;
    this.getCategory(id);

    this.$axios.get('getimgcategory')
        .then( res => {
            this.categorys = res.data.message;
            this.categorys.unshift({id:0,title:'全部'})
        })
        .catch( err => console.log("获取分类失败",err))
  },
  methods:{
      getCategory (id) {
        console.log(this.$refs['child'])
        this.$axios.get('getimages/' + id)
        .then( res => {
            this.imgs = res.data.message;
            if (this.imgs.length === 0){
                this.$toast({
                    message: '没有图片了！',
                    iconClass: 'iconfont icon-debug'
                })
            }
        })
        .catch( err => console.log("获取图文失败",err))
      }
  }
}
</script>
<style>
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.icon-debug{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(../../assets/img/iconfont.png);
    background-size: 100% 100%;
}
ul li{list-style: none;}
ul li:after{display: block;content: '';clear: both;}
ul li a{color:#323232;text-decoration: none;font-size: 14px;}
ul li a img{width: 20%;display: inline;}
ul li a>div{float: right;width: 80%;}
</style>
