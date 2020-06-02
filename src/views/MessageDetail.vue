<template>
<ul class="list-group">
    <li class="list-group-item">msgID:{{msgId}}</li>
    <li class="list-group-item">msgContent:{{msgContent}}</li>
    <li class="list-group-item">msgTitle:{{title}}</li>
</ul>
</template>

<script type="text/ecmascript-6">
let msgTites = [
    {id:1,title:'msg001'},
    {id:2,title:'msg002'},
    {id:3,title:'msg003'},
]
export default {
    props:['msgId','msgContent'],
    data () {
        return {
            title:''
        }
    },
    mounted() {
        this.show()
    },
    methods: {
        show(){
            setTimeout(()=>{
                this.title = msgTites.find(item=>item.id === this.msgId*1).title
            },1000)
        }
    },
    watch: {
        $route(newval,odlval){
            this.show()
        }
    },
}
</script>

<style scoped>


</style>
