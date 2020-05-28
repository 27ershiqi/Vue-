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
      <Add @addComment="addComment"/>
      <List :commtents="commtents" :deleteComment="deleteComment"/>
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
      commtents:[
        {id:1,username:"欧阳锋",content:"vue这个孩子真操蛋"},
        {id:2,username:"欧阳娜娜",content:"vue这个孩子真操蛋"},
        {id:3,username:"欧阳三少",content:"vue折磨的俺头疼"}
      ]
    }
  },
  methods: {
    addComment(obj){
      this.commtents.unshift(obj)
    },
    deleteComment(index){
      this.commtents.splice(index,1)
    }
  },
}
</script>

<style scoped>


</style>
