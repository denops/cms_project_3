<template>
    <li>
        <slot></slot>
    </li>
</template>
<script>
    export default {
        name: 'my-li',
        data () {
            return {

            }
        }
    }
</script>
<style scoped>
  ul li{
    float: left;
    list-style: none;
    width: 33.3%;
    text-align: center;
    height: 100px;
    line-height: 30px;
  }
</style>
