<template>
<div class="row">
    <h2 v-if="isFirst">初次见面请多关照</h2>
    <h2 v-else-if="isLoading">发送请求中</h2>
    <h2 v-else-if="errMsg">请求出错,{{errMsg}}.请重新发送请求</h2>
      <div v-else class="card" v-for="(user, index) in users" :key="user.user_name">
        <a :href="user.user_url">
          <img :src="user.user_img" style="width: 100px"/>
        </a>
        <p class="card-text">{{user.user_name}}</p>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios"
import "@babel/polyfill"
export default {
    mounted() {
        this.$bus.$on('searchAjax',this.searchAjax)
    },
    data() {
        return {
            isFirst:true,
            isLoading:false,
            errMsg:'',
            users:[]
        }
    },
    methods: {
      async searchAjax(searchName){
            this.isFirst = false
            this.isLoading = true
        try{
           let response = await axios({
                method:"GET",
                url:"https://api.github.com/search/users",
                params:{
                    q:searchName
                }
            })
                this.isLoading = false
                console.log(response.data)
                response.data.items.forEach(item=>{
                    let user_name = item.login
                    let user_img = item.avatar_url
                    let user_url = item.url
                    let  obj = {
                        user_name,
                        user_img,
                        user_url
                    }
                    this.users.push(obj)
                })
        
        } catch (error) {
                this.errMsg = error.message
                this.isLoading = false
            }
        }
    },
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}


</style>
