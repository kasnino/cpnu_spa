<template>
    <header class="header-pos">
            <h1>hola header</h1>
    </header>
</template>
<script>
import resourcesLoader from "../js/mixins/resources-loader";
export default { 
    mixins: [resourcesLoader],
    props:{
        simple:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {

        
        }
    },
    methods: {    
        getData(data) {
            return data
        }
    },
    created() {
       
    },
    methods: {
     
    },
    computed: {
        
    },
    watch: {
      
    }

}
</script>
<style lang="scss" scoped>
@import '../sass/globals';


</style>