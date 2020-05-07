<template>
    <header class="header-pos">
             <v-layout wrap grow justify-center align-start text-xs-center class="elemento_cont">                
        <v-flex style="min-width: 100px; max-width: 100%;" grow xs12 sm5 md2  v-for="(element, index) in 5 " :key="index" justify-center class="flex-grow-1 flex-shrink-0 footer_litte">
                    <v-hover v-slot:default="{ hover }">
                     <v-card
                                              class="mx-auto  hvr-scale"
                                              :class="`animated bounceIn dura-${index}`"
                                              active-class="carta"
                                              max-width="544"
                                              height="40"
                                              elevation="4"
                                              :color="color[index]"
                                              tile
                                            >
                       
                                             <v-layout   wrap justify-center align-center text-xs-center class="">
                                                    <v-flex  xs12 sm12 md12  text-center class="" >
                                                        <span class="d-flex texto_interno" 
                                                       :id="`texto${index}`">
                                                        {{textos[index]}} </span>
                                                    </v-flex>
                                                    <v-flex  xs2 sm2 md2 text-xs-center justify-center  align-center class="" >
                                                      <span class="avatar hvr-scale borde-capa"></span>
                                                    </v-flex>
                                             </v-layout>
                                                                <v-scroll-x-transition>
          <div
            v-if="hover"
            class="d-flex transition white  v-card--reveal"
          >   
            <span class="texto_interno_dos">  {{textos[index]}} </span>
          </div>
        </v-scroll-x-transition>
                                             </v-card>  
                    </v-hover>   
        </v-flex> 
             </v-layout>
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
            color:['#91be91','#ffd20f', '#4f90c8', '#cb302f', '#0a7a39'],
            textos:[
                'Consejo Superior de la Juricatura',
                'Corte Suprema de la justicia',
                'Consejo de Estado',
                'Corte Constitucional',
                'Sala Jurisdiccional Disciplinaria'
            ]

        
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

#texto1{
    color: #666666;
}
.texto_interno{
    color: white;
      align-items: center;
  bottom: 0;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: Poppins-SemiBold;
    font-size: 14px;
}

.footer_litte{
    width: 100%;
}
.texto_interno_dos{
    color: #4e4747;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  color: black;
 font-family: Poppins-SemiBold;
  font-size: 14px;
}
</style>