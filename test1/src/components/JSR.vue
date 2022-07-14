<template>
    <div>
        <p>{{ name}}</p>
        <button @click="updateName">CHANGE NAME</button>
    </div>

</template>

<script>
export default{
    data(){
       return {
        name: 'JSR',
       }
    },

    methods: {
        updateName() {
            this.name = 'JSR UPDATED';
        }       
    },
}
</script>

<style scoped>

</style>