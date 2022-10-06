<template>
  <div id="app">
    <v-app id="inspire">
      <my-pdf/>
    </v-app>
  </div>
</template>

<script>
import MyPdf from "@/components/MyPdf";

export default {
  name: "App",
  components: {
    MyPdf
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
