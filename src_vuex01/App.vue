
<template>
  <div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">{{cound}}</button>
  <button @click="incrementAsync">{{cound}}</button>
  <p>6倍的cound {{currentCount}}</p>
</div>
</template>

<script type="text/ecmascript-6">
import {mapMutations,mapActions,mapGetters, mapState} from "vuex"
export default {
  methods: {
      // increment(){
      //   this.$store.commit('increment')
      // },
      // decrement(){
      //   this.$store.commit('decrement')
      // },
      // incrementIfOdd(){
      //   this.$store.dispatch('incrementIfOdd')
      // },
      // incrementAsync(){
      //   this.$store.dispatch('incrementAsync')
      // }

      ...mapMutations(['increment','decrement']),
      // ...mapActions(['incrementIfOdd','incrementAsync'])
      ...mapActions({'incrementIfOdd':'IncrementIfOdd'}),
      ...mapActions(['incrementAsync'])
  },
  computed: {
    // currentCount(){
    //   return this.$store.getters.currentCount
    // },
    // cound(){
    //   return this.$store.state.cound
    // }

    ...mapGetters(['currentCount']),
    ...mapState(['cound'])
  },
}
</script>

<style scoped>


</style>
