<template>
  <div class="todo-container">
    <div class="todo-wrap">
      
      <Header :addTodo="addTodo"/>
      <Main :comtents="comtents" :updateOne="updateOne" :deleteOne="deleteOne"/>
      <Footer :comtents="comtents" :updateAll="updateAll" :deleteAll="deleteAll"/>

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
    data() {
        return {
            comtents:JSON.parse(localStorage.getItem('comtents_key')) || []
        }
    },
    methods: {
        addTodo(obj){
            this.comtents.unshift(obj)
        },
        updateOne(index,val){
            this.comtents[index].isOver = val
        },
        deleteOne(index){
            this.comtents.splice(index,1)
        },
        updateAll(val){
            this.comtents.forEach(item => item.isOver = val)
        },
        deleteAll(){
            this.comtents = this.comtents.filter(item => !item.isOver)
        }

    },
    watch: {
        comtents:{
            deep:true,
            handler(newval,oldval){
                localStorage.setItem('comtents_key',JSON.stringify(newval))
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
