<template>
  <div>
    <mt-header fixed title="信息管理系统"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img @click="changeHash" slot="icon" src="./assets/img/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img @click="changeHash" slot="icon" src="./assets/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img @click="changeHash" slot="icon" src="./assets/img/car.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img @click="changeHash" slot="icon" src="./assets/img/serch.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: ''
    }
  },
  methods:{
    changeHash () {
      this.$nextTick(function() {
        console.log(this.selected);
        this.$router.push({
        name: this.selected
      })
      })
    }
  },
  watch: {
    // selected (newV, oleV) {
    //   this.$router.push({
    //     name: newV
    //   })
    // }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
