<template>
  <div class="tmpl">
    <nav-bar title="图文分享" ref="child"/>
    <div class="cateBox">
        <a v-for=" c in categorys" :key="c.id" @click="getCategory(c.id)" href="javascript:;">{{c.title}}</a>
    </div>
    <div class="photo-list">
        <ul>
            <li v-for="img in imgs" :key="img.id">
                <router-link :to="{name:'photo.detail',query:{id:img.id}}">
                    <img v-lazy="img.img_url" alt=""/>
                    <div>
                        <div class="zmark"></div>
                        <h4>{{img.title}}</h4>
                        <span>{{img.zhaiyao}}</span>
                    </div>
               </router-link>
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
      loadImgsRounter (id) {
            this.$router.push({
                name: 'photo.list',
                params: { id: id }
            });
      },
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
.photo-list ul{padding:0; }
.photo-list ul li{list-style: none;position: relative;margin-bottom: 10px}
.photo-list ul li a{color:#ffffff;text-decoration: none;font-size: 14px;}
.photo-list ul li a img{width: 100%;display: inline;}
.photo-list ul li a>div{width: 100%;position: absolute;bottom: 0}
.photo-list ul li a .zmark{width: 100%;height:100%;position: absolute;bottom: 0;background: #000000;opacity: .3;}
.cateBox{
    height: 30px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}
.cateBox a{
    font-size: 1.1rem;
    display: inline-block;
    line-height: 20px;
    background: #F4F8FB;
    color: #7D7D7D;
    padding: 3px 9px;
    margin: 0 5px 10px 0;
    text-decoration: none;
}
.cateType li a{text-decoration: none;}
</style>
