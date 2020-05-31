<template>
<div class="todo-container">
    <div class="todo-wrap">
      
      <Header :addingdata="addingdata"/>
      <Main :contents="contents" :modify="modify" :deleteAll="deleteAll"/>
      <Footer :contents="contents" :Allbreaks="Allbreaks" ref="pp"/>
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
export default {
    components:{
        Header,
        Main,
        Footer
    },
    mounted() {
      this.$refs.pp.$on('ClearAll',this.ClearAll)
    },
    data() {
        return {
            contents:JSON.parse(localStorage.getItem('contents_key')) || []
        }
    },
    methods: {
        //修改数据
        modify(val,index){
            this.contents[index].isOver = val
        },
        Allbreaks(val){
          this.contents.forEach(item => item.isOver = val)
        },
        addingdata(obj){
          this.contents.unshift(obj)
        },
        //删除
        deleteAll(index){
          this.contents.splice(index,1)
        },
        //清除已完成任务
        ClearAll(){
         this.contents = this.contents.filter(item => !item.isOver)
        }
    },
    watch: {
      contents:{
        deep: true,
        handler(newval,oldval){
          localStorage.setItem('contents_key', JSON.stringify(newval));
        }
      }
    },
}
</script>

<style scoped>

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
