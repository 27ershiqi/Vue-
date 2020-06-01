// import srcCss from "./publie/css/index.css"
import srcImgs from "./publie/imgs/3.jpg"
// // let pp = document.createElement("p");
// // pp.innerHTML = "我爱你赵丽颖"
// // document.getElementById("root").appendChild(pp);

let imgs = new Image();
imgs.src = srcImgs;
document.body.appendChild(imgs);

// let a = 100;
// let res = '嘻嘻嘻';
// console.log(a);
// console.log(res);

import Vue from "vue"
import App from "./App.vue"
new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    el:"#root",
    render:h => h(App)
})





