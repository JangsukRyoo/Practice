<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ name}}</p>
        <button @click="updateName">CHANGE NAME</button>
    </div>

</template>

<script>
export default{

    props: ['title'],

    data(){
       return {
        name: 'LatteGo',
       }
    },

    methods: {
        updateName() {
            this.name = 'JSR UPDATED';
        }       
    }
}
</script>

<style scoped>
</style>