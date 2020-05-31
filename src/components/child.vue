<template>
<div>
    <p>我是固定不变的</p>

    <slot>我爱你</slot>
    <slot name="aa">我恨你</slot>
    <slot name="bb">我喜欢你</slot>

      <ul>
        <li v-for="(person, index) in persons" :key="person.id">
            <slot name="uu" :person="person">
                
                {{person.name}}
            </slot>
        </li>
    </ul>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            persons:[
                {id:1 ,name:"zhaoliying",age:33},
                {id:2 ,name:"yangmi",age:23},
                {id:3 ,name:"qiwei",age:43},
            ]
        }
    },
}
</script>

<style scoped>


</style>
