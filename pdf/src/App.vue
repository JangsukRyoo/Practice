<template>
  <div>
    <h1>File</h1>
    <vue-pdf-embed :source="source1" />
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      source1: 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf',
    }
  },
}
</script>