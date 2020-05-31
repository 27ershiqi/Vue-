<template>
  <li @mouseenter="mouseen(true)" @mouseleave="mouseen(false)" :class="mycolor">
    <label>
        <input type="checkbox" v-model="isOver"/>
        <span>{{content.username}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteC">删除</button>
</li>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        content:Object,
        index:Number,
        modify:Function,
        deleteAll:Function
    },
    computed: {
      isOver:{
        get(){
          return this.content.isOver
        },
        set(val){
          this.modify(val,this.index)
        }
      }
    },
    data() {
      return {
        isShow:false,
        mycolor:'yichu'
      }
    },
    methods: {
        mouseen(flag){
           flag?this.mycolor = 'yiru':this.mycolor = 'yichu'
           this.isShow = !this.isShow
        },
        deleteC(){
          this.deleteAll(this.index)
        }
    },
}
</script>

<style scoped>

li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.yiru{
  background-color: #ddd;
}
.yichu{
  background-color: #fff;
}
</style>
