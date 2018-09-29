<template>
    <div class="tmpl">
        <div>
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <span><a href="">返回</a></span>
                    </div>
                </li>
                <li>
                    <textarea name="" id="" cols="30" rows="10" v-model="newComent"></textarea>
                </li>
                <li>
                    <mt-button size="large" type="primary" @click="sendMsg">发表评论</mt-button>
                </li>
                <li>
                    <div>
                        <span>评论列表</span>
                        <span>44条</span>
                    </div>
                </li>
            </ul>
            <ul>
                <li v-for="(msg,index) in msgs" :key="index">
                    {{msg.user_name}} : {{msg.content}} -- {{msg.add_time | relativeTime}}
                </li>
            </ul>
            <mt-button type="danger" size="large" plain @click="loadMore(page)">加载更多{{page}}</mt-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'comment',
        props: ['cid'],
        methods: {
           
        },
        data () {
            return {
                msgs:[],
                page:1,
                newComent: ''
            }
        },
         beforeRouteUpdate (to, from, next) {
            console.log("router:",to);
        },
        created () {
            this.page = this.$route.query.page || '1';
            this.loadMore();
        },
        methods: {
            loadMore (page) {
                 this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
                .then( res => {
                    if(res.data.message.length === 0){
                        this.$toast('没有数据了！');
                        return;
                    }
                    if (page) {
                        this.msgs = this.msgs.concat(res.data.message);
                    } else {
                        this.msgs = res.data.message;
                    }
                    this.page++;
                })
                .catch( err => console.log('获取评论列表失败',err))
            },
            sendMsg () {
                 if (this.newComent.trim() === '') {
                    return this.$toast('评论信息不能为空！');
                }
                this.$axios.post('postcomment/' + this.cid,'content=' + this.newComent)
                .then(res =>{
                   this.newComent = '';
                   this.page = 1;
                   this.loadMore();
                })
                .catch(err => console.log('发表评论失败'))
            }
        }
    }
</script>
<style scoped>
 ul{padding: 0}
</style>
