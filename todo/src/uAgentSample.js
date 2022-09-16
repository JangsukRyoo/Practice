export default {

    components: {
        // Todo
    },

    data(){
        return {
            deviceType:''
        }
    },
    methods:{
        chkUserAgent(){
            var uAgnt = navigator.userAgent.toLowerCase();
            console.log(uAgnt);
            if(uAgnt.indexOf("android")>-1){
                this.deviceType = "AND";
            }else if(uAgnt.indexOf("iphone")>-1 || uAgnt.indexOf('ipad') >-1|| uAgnt.indexOf('mac os x') >-1){
                this.deviceType = "IOS";
            }else if(uAgnt.indexOf("window") > -1){
                this.deviceType = "window";
            }else {
                this.deviceType = "etc";
            }
        }
    },
    computed:{},
    mounted() {
        this.chkUserAgent();
    }
}
