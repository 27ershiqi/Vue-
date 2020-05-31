<template>
<div class="todo-footer">
      <label>
        <input type="checkbox" v-model="iswrite"/>
      </label>
      <span>
        <span>已完成{{isObtain}}</span> / 全部{{isAll}}
      </span>
      <button class="btn btn-danger" @click="Clear">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
      contents:{
        type:Array,
        default:[]
      },
      Allbreaks:Function,
      // ClearAll:Function
  },
  computed: {
    //已完成
    isObtain(){
     return this.contents.filter(item => item.isOver).length
    },
    //全部
    isAll(){
      return this.contents.length
    },
    iswrite:{
      get(){
        return this.contents.filter(item => item.isOver).length === this.contents.length && this.contents.length > 0
      },
      set(val){
        this.Allbreaks(val)
      }
    }
  },
  methods: {
    Clear(){
      this.$emit('ClearAll',)
    }
  },
}
</script>

<style scoped>

.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>
