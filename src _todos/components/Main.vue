<template>
<ul class="todo-main">
    <Item v-for="(content, index) in contents" :key="content.id" 
    :content="content"
    :index="index"
    :modify="modify"
    :deleteAll="deleteAll"/>
 </ul>
</template>

<script type="text/ecmascript-6">
import Item from "./Item"
export default {
  props:{
    contents:Array,
    modify:Function,
    deleteAll:Function
  },
  components:{
    Item  
  }
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>


