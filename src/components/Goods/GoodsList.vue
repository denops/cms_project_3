<template>
    <div class="tmpl">
        <nav-bar title="商品列表" ref="child"/>
        <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
            <ul>
                <li v-for="goods in goodsList" :key="goods.id">
                    <a href="">
                        <img :src="goods.img_url" alt="">
                        <div v-text="goods.title"></div>
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
                    </a>
                </li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
        </mt-loadmore>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        topStatus: '',
        goodsList:[]
      };
    },
    created() {
        let page = this.$route.query.id || '1';
        this.$axios.get('getgoods?pageindex=' + page)
        .then(res =>{
            this.goodsList = res.data.message;
        })
        .catch(err =>console.log('商品列表获取失败',err))
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },
      loadTop() {
          this.$refs.loadmore.onTopLoaded();
      },
      loadBottom() {
          console.log("上来加载");
          this.$refs.loadmore.onBottomLoaded();
      }
    }
  };
</script>
<style scoped>
ul li{
    float: left;
    width: 50%;
    list-style: none;
    border: 1px solid #cccccc;
    box-sizing: border-box;
}
ul li img{
    width: 100%;
}
ul li a{display: block;color: black;text-decoration: none;}
.sell span{color:red}
</style>
