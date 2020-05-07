<template>
     <v-layout   wrap justify-center align-center text-xs-center class="conten_main">
         <v-flex  xs12 sm12 md12  class="conten_main" >
    <v-layout wrap grow justify-center align-center text-xs-center class=" cards_ele">                
        <v-flex ma-2 grow xs12 sm5 md2  v-for="(element, index) in 5 " :key="index" justify-center class="footer_litte">
                                            <v-card
                                              class="mx-auto cards_ele hvr-scale"
                                              :class="`animated bounceIn dura-${index}`"
                                              active-class="carta"
                                              max-width="300"
                                              height="250"
                                              elevation="0"
                                              shaped
                                            >
                       
                                             <v-layout wrap justify-center align-center text-xs-center class="">
                                                    <v-flex  xs12 sm12 md12  text-center class="" >

                                                       <v-layout  wrap grow justify-center align-start text-xs-start class="contendor_icon">    
                                                      <v-icon class="iconos " size="35">{{icons[index]}}</v-icon>
                                                       </v-layout>
                                                         <v-layout  wrap grow justify-center align-center text-xs-center class=" ">    
                                                        <span class="d-flex texto_interno" 
                                                               :id="`texto${index}`">
                                                                {{textos[index]}}
                                                             </span>
                                                       </v-layout>
                                                    
                                                     
                                                      
                                                    </v-flex>
                                                    <v-flex  xs2 sm2 md2 text-xs-center justify-center  align-center class="" >
                                                      <span class="avatar hvr-scale borde-capa"></span>
                                                    </v-flex>
                                             </v-layout>
  
                                             </v-card>  
                   
                           </v-flex> 
             </v-layout>
         </v-flex>
     </v-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
      data() {
        return {
          icons:['fas fa-list-ol','fas fa-file-invoice', 'fas fa-gavel', 'fas fa-chalkboard-teacher', 'fas fa-user-tie'],
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
}
</script>
<style lang="scss" scoped>
@import '../sass/globals';

.contendor_icon{
  width: 100%;
  height: 150px;
}
.cards_ele{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
}
.conten_main{
  width: 100%;
  height: 500px;
 
}
</style>