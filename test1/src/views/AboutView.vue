<template>
  <div class="about">
    <h1>This is an about page</h1>
    <JSR title="about"/>
  </div>
</template>
<script>
import JSR from '@/components/JSR.vue';

export default{
  components:{ 
    JSR
  }
  
  // data(){
  //   return{
  //     title: 5
  //   }
}
</script>
