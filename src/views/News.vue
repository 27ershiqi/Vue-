<template>
<div role="tabpanel" class="tab-panel" id="News">
        <ul class="list-group">
            <li class="list-group-item" v-for="(n) in news" :key="n.id">
                {{n.content}}
                <button type="button" class="btn btn-primary" data-toggle="button"
                    aria-pressed="false" autocomplete="off"
                    @click="msgbtn(n)">
                    {{n.id}}
                </button>
            </li>
        </ul>
      
        <button @click="$router.back()">返回</button>
        <div class="alert alert-success" role="alert">
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
        return {
            news:[
                {id:1,content:'newsOne'},
                {id:2,content:'newsTwo'},
                {id:3,content:'newsThree'},
            ]
        }
    },
    methods: {
        msgbtn(n){
            // this.$router.push('/home/message/newsdetail'+n.id+'?newContent='+n.content)
            this.$router.replace({name:'msgname',params:{newsId:n.id},query:{newContent:n.content}})
        }
    }
}
</script>

<style scoped>


</style>
