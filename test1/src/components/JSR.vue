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
        // props로 설정을 해서 같은 name
        // name: 'JSR',
       }
    },

    methods: {
        updateName() {
            // 이것도 마찬가지로 바꿀수 없음
           // this.name = 'JSR UPDATED';
        }       
    },
}
</script>

<style scoped>
</style>