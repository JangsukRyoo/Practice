<template>
  <div>
    <h1>"This is Home Page" </h1>
    <!-- <JSR title="home title"/>
    <JSR />> -->
    <form action="">
      <InputField v-model="name" />
      <br><button>Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import InputField from '../components/InputField.vue'
// import JSR from '@/components/JSR.vue';

export default{
  components: { InputField }, 
  // components:{
  //   JSR
  // },
  data(){
    return{
      // name: 'JSR'
      name:''
    }
  },
  // methods: {
  //   updateName(name){
  //     this.name = name;
  //   }
  // }
}
</script>



<style scoped>
h1 {
  font-size:20px;
  color: blue;
}
</style>
