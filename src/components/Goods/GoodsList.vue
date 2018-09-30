<template>
    <div class="tmpl">
        <nav-bar title="商品列表" ref="child"/>
        <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" ref="loadmore" :bottom-all-loaded="isAllLoaded">
            <ul>
                <li v-for="goods in goodsList" :key="goods.id">
                    <router-link :to="{ name:'goods.detail',params: { id:goods.id } }">
                        <img :src="goods.img_url" alt="">
                        <div>{{ goods.title | convertstr(25)}}</div>
                        <div class="desc">
                            <div class="sell">
                                <span>${{goods.sell_price}}</span>
                                <s>${{goods.market_price}}</s>
                            </div>
                            <div>
                                <span>热卖中</span>
                                <span>剩{{goods.stock_quantity}}件</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
           
        </mt-loadmore>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        page: 1,
        goodsList:[],
        isAllLoaded:false
      };
    },
    created() {
        let page = this.$route.query.id || '1';
        this.loadBypage(this.page);
    },
    methods: {
      loadBypage(page) {
        this.$axios.get('getgoods?pageindex=' + page)
        .then(res =>{
            this.goodsList = res.data.message;
             this.page++;
        })
        .catch(err =>console.log('商品列表获取失败',err))
      },
      concatBypage(page) {
        this.$axios.get('getgoods?pageindex=' + page)
        .then(res =>{
            if (res.data.message.length === 0) {
                this.$toast('没有数据了')
                this.isAllLoaded = true;
            }
            this.goodsList = this.goodsList.concat( res.data.message );
             this.$refs.loadmore.onBottomLoaded();
             this.page++;
        })
        .catch(err =>console.log('商品列表获取失败',err))
      },
      loadBottom() {
          this.concatBypage(this.page)
      }
    }
  };
</script>
<style scoped>
ul{
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
}
ul li{
    float: left;
    width: 47%;
    list-style: none;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    margin-bottom: 2%;
    margin-left: 2%;
}
ul li img{
    width: 100%;
}
ul li a{display: block;color: black;text-decoration: none;}
.sell span{color:red}
</style>
