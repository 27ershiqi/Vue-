<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
      <span>已完成{{overNum}}</span> / 全部{{allNum}}
    </span>
    <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    // props:['todos']
    // props:{
    //     todos:Array
    // }
    props:{
        comtents:{
            type:Array,
            default:[]//默认值是一个空数组
        },
        updateAll:Function,
        deleteAll:Function //props需要，全局事件总线不需要
    },

    computed: {
        overNum(){
            //需要去统计一下todos里面所有的对象isOver属性值为true的个数
            // return this.todos.filter(function(item,index){
            //     return item.isOver
            // })
            return this.comtents.filter(item => item.isOver).length
        },
        allNum(){
            return this.comtents.length
        },
        isCheckAll:{
            get(){
                return this.overNum === this.allNum && this.allNum > 0
            },
            set(val){
                this.updateAll(val)
            }
        }

    },

    methods:{
        deleteA(){
            this.deleteAll()
        }
    }

};
</script>

<style scoped>
/*footer*/
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
