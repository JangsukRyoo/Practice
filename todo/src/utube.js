
  import YouTubeIframeLoader from "youtube-iframe"

  export default Vue.extend({
  methods: {
      player2() {
        YouTubeIframeLoader.load((YT) => {
          const player = new YT.Player("player2", {
            startSeconds: '1999',
            height: '390',
            width: '640',
            videoId: this.videoId,
            videoId: "Vw-tayLQLuQ",
            events: {
              onReady: () => {},
              onStateChange: e => {}
            }
          });
        });
      },
  }
  })
