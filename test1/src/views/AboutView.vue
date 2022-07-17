<template>
  <div class="about">
    <h1>This is an about page</h1>
    <JSR>
      <template #header="{ js }">
        <p>header1 {{ js }}</p>
      </template>
      <template #default>
        default hello
      </template>
    </JSR>
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
