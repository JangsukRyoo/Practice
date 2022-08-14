<template>
    <div>
        <!-- <h1>{{ title }}</h1> -->
        <!-- <p>{{ name }}</p> -->

        <!-- slot 사용하기-->
        <p>header</p>
        <slot name="header" :js="js"></slot>
        <p>body</p>
        <slot></slot>
        <p>footer</p>
        <slot></slot>
        <br>
        <button @click="updateName">CHANGE NAME</button>
    </div>

</template>

<script>
export default{
    props: {
        title:{
            // String 타입만 받겠다 세팅
            type: String ,
            // 무조건 이 표현이 있어야됨 = true false 무조건 아님
            required: false,
            default : 'default title'
        },
        name: {
            type : String, 
            default : 'default name'
        },
    },
    data(){
       return {
        js: 'rr jsr',
       }
    },
    methods: {
        updateName() {

        }       
    },
}
</script>

<style scoped>
</style>