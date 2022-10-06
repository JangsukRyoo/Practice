<template>
  <v-container>
    <!-- <resize-sensor :initial="true" @resize="resize()"/> -->
    <v-row class="flex-column">
      <v-col>
        <v-btn color="primary" @click="switchPdf">Switch</v-btn>
      </v-col>
      <v-col>
        <pdf
          v-for="n in numPages"
          :key="generatePageKey(url, n)"
          :page="n"
          :scale.sync="scale"
          :src="url"
          @numpages="setNumPages"
        >
          <template #loading>
            <v-layout justify-center>
              <span v-if="n === 1">Loading...</span>
            </v-layout>
          </template>
        </pdf>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pdf from "pdfvuer";
// import resizeSensor from "vue-resize-sensor";

export default {
  name: "MyPdf",
  components: {
    pdf,
    // resizeSensor
  },
  data() {
    return {
      numPages: 1,
      scale: "page-width",
      urlToShow: 1,
    };
  },
  computed: {
    url() {
      if (this.urlToShow === 1) {
        // return "../assets/1.pdf";
        return "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";
      } else {
        // return "../assets/2.pdf";
        return "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";
      }
    },
  },
  methods: {
    generatePageKey(url, pageNumber) {
      // return `${encodeURI(url)}-${pageNumber}`;
      return `${url}-${pageNumber}`;
    },
    // resize() {
    //   // some logic
    // },
    setNumPages(pages) {
      this.numPages = pages;
    },
    switchPdf() {
      this.urlToShow = this.urlToShow === 1 ? 2 : 1;
    },
  },
};
</script>
