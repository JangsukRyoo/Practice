<template>

    <div>
      <input type="checkbox" :cheked="todo.checked">
      <span class="ml-3">{{ todo.text}}</span>
    </div>    

</template>

<script>
export default {
  props:{
    todo: {
      type:Object,
      required: true
    }
  }
}
</script>

<style>
 
</style>