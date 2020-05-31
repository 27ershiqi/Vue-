<template>
<div>
  <child>
  <template>
        <h2>哈哈</h2>

      </template>
      <p slot="aa">我是具名的插槽</p>
  </child>

<child>
        <a href="##">呵呵</a>
        <p slot="bb">我喜欢你哦</p>

        <span slot-scope="slotProps" v-show="isShow" slot="uu">
            √{{slotProps.person.name}}
        </span>
</child>

</div>
</template>

<script type="text/ecmascript-6">
import child from "./components/child"
export default {
  components:{
    child
  },
  data() {
    return {
      isShow:true
    }
  },
}
</script>

<style scoped>


</style>
