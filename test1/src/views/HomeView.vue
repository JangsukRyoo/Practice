<template>
  <div>
    <h1>"This is Home Page" </h1>
    <JSR title="home title"/>
    <JSR />>
  </div>
</template>

<script>
import JSR from '@/components/JSR.vue';

export default{
  components:{
    JSR
  },
  data(){
    return{
      name: 'JSR'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size:20px;
  color: blue;
}
</style>
