<template>
<ul class="todo-main">
    <Item v-for="(comtent, index) in comtents" :key="comtent.id" 
    :comtent="comtent"
    :updateOne="updateOne"
    :index="index"
    :deleteOne="deleteOne"/>
 </ul>
</template>

<script type="text/ecmascript-6">
import Item from "./Item"
export default {
    props:{
        comtents:Array,
        updateOne:Function,
        deleteOne:Function
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
