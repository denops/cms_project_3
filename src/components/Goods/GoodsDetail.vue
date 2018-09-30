<template>
    <div class="tmpl">
        <nav-bar title="商品详情" ref="child"/>
        <div class="outer-swiper">
            <div class="swiper">
                 <my-swipe url="getthumimages/87" />
            </div>
        </div>
        <div class="product-desc">
            <ul>
                <li><span>{{goodsInfo.title}}</span></li>
                <li>市场价:<s>￥{{goodsInfo.market_price}}</s>销售价: <span>￥{{goodsInfo.sell_price}}</span> </li>
                <li>购买数量：</li>
                <li>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="insertBall">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        <div class="ball" v-if="isExsit"></div>
        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li>商品货号：{{goodsInfo.goods_no}}</li>
                <li>库存情况：{{goodsInfo.stock_quantity}}</li>
                <li>上架时间：{{goodsInfo.add_time}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        isExsit:false,  
        goodsInfo:{}
      };
    },
    created() {
        let imgid = this.$route.params.id;
        this.$axios.get('goods/getinfo/' + imgid)
        .then(res => {
            this.goodsInfo = res.data.message[0];
        })
        .catch(err => console.log('商品详情获取失败',err))
    },
    methods: {
        insertBall () {
            this.isExsit = true;
        }
    }
  };
</script>
<style scoped>

</style>
