<template>
<div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addContent="addContent"></Add>
      <List :comments="comments" :deleteComment="deleteComment"></List>      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from "./components/Add"
import List from "./components/List"
export default {
  components:{
    Add,
    List
  },
  data() {
    return {
      comments:[
        {id:1,username:'欧阳锋',content:'Vue真棒'},
        {id:2,username:'欧阳娜娜',content:'Vue666'},
        {id:3,username:'欧阳三少',content:'Vue把我搞崩溃了'},
      ]
    }
  },
  methods: {
    addContent(obj){
      this.comments.unshift(obj)
    },
    deleteComment(index){
      this.comments.splice(index,1)
    }
  },
}
</script>

<style scoped>


</style>
