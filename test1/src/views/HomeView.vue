<template>
  <div>
    <h1>"This is Home Page" </h1>
    <!-- <JSR title="home title"/>
    <JSR />> -->
    <form action="">
      <InputField v-model="name" />
      <br><button @click="updatedName">Submit</button>
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
      name:'JSRJSR'
    }
  },
  // methods: {
  //   updateName(name){
  //     this.name = name;
  //   }
  // }
//   beforeCreate() {
//     //아직 데이터를 받지 못해서 undefindf라고 뜸
//     console.log('beforeCreate', this.name)
//   },

//   created() {
//     // 데이터를 받음
//     console.log('created', this.name)
//   },

//   beforeMount() {
//     //화면이 그려지기전 
//     alert("beforeMount")

//   },
//   mounted() {
//     //dom 컨트롤
//       alert("mounted")
//   },
//   beforeUpdate() {
//     //데이터가 바뀌기전
//     alert('before updated')
//   },
//   updated() {
//     //데이터가 바뀜
//     alert('updated')
//   },
// beforeUnmount() {
//     alert('beforeUnmount')
// },
// unmounted() {
//   // 여기서 나갈때 메모리 누스를 방지하기 위헤 이벤트 리스너 삭제, 데이터 초기화 등등 하면됨
//     alert('unmounted')
// },
// methods: {
//   updatedName(){
//     this.name = 'hello';
//   }
// },

}
</script>

<style scoped>
h1 {
  font-size:20px;
  color: blue;
}
</style>
