import Vue from "vue"
import App from "./App.vue"
import store from "./vuex/store"

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    el:"#root",
    render:h => h(App),
    store
})
