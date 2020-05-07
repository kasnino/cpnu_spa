<template>
     <v-layout    wrap grow justify-center align-center text-xs-center class="conten_main">
         <v-flex  xs12 sm12 md12  class="conten_main" >
            <v-layout  wrap grow mt-5 justify-center align-center text-xs-center class="conten_titulos">
                <v-flex  xs12 sm12 md12  text-center class="" >
                   <span class="titulo_centro">Opciones de Consulta</span>
                </v-flex>
            </v-layout>
          <v-layout wrap grow justify-center align-center text-xs-center class=" cards_ele">                
              <v-flex ma-2 grow xs12 sm5 md2  v-for="(element, index) in 5 " :key="index" justify-center class="hvr-scale footer_litte">

                                             <router-link class="slink" :to="route[index]" >  
                                              <v-card
                                                  class="mx-auto carta cards_elem hvr-scale"
                                                  :class="`animated bounceIn dura-${index}`"
                                                  max-width="300"
                                                  height="200"
                                                  elevation="1"
                                                  shaped
                                                  :light="false"
                                              >
                        
                                              <v-layout wrap justify-center align-center text-xs-center class="">
                                                      <v-flex  xs12 sm12 md12  text-center class="" >

                                                        <v-layout  mt-3 wrap grow justify-center align-start text-xs-start class="contendor_icon">    
                                                        <v-btn icon class="boton__ hvr_scale">
                                                        <v-icon  class="iconos " size="35">{{icons[index]}}</v-icon>
                                                        </v-btn>
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
                              <v-tabs-slider class="barra_" centered grow :color="selectcolor[index]"></v-tabs-slider>
                                          
                                              </v-card>  
                                             </router-link>
                                       
                   
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
           tab:'',
            route:['/NumeroRadicacion','/ConsultaRazonSocial','/ConsultaRazonSocial','/ConsultaRazonSocial','/ConsultaRazonSocial'],
          selectcolor:['#91be91','#ffd20f', '#4f90c8', '#cb302f', '#0a7a39'],
          icons:['fas fa-list-ol','fas fa-file-invoice', 'fas fa-gavel', 'fas fa-chalkboard-teacher', 'fas fa-user-tie'],
            color:['#91be91','#ffd20f', '#4f90c8', '#cb302f', '#0a7a39'],
            textos:[
                'Numero de Radicacion',
                'Consultar por Nombre o Razón Social',
                'Ultimas Actuaciones por Nombre o Razón Social',
                'Construir Numero',
                'Consultar por Juez / Magistrado y Clase de Proceso'
            ]

        
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../sass/globals';
.iconos{
  color: var(--texto_land);
  width: 100%;
  height: 100%;
}
.barra_{
  height: 3px;
    position: absolute;
    bottom: 0;
    /* border-bottom-right-radius: 42px; */
    /* border-radius: 142%; */
    width: 91%;
}
    .v-application a {
     text-decoration: none;
}
.conten_titulos{
  width: 100%;
  height: 100px;
}
.contendor_icon{
  width: 100%;
  height: 88px;
}
.cards_ele{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 90%;
}

.theme--light.v-sheet{
  background: none;
    background: var(--fondo_main);
}

.theme--light.v-card {
   background: none;
    background: var(--fondo_main);
}


.texto_interno{
    font-family: Poppins-Regular;
    color: var(--texto_land);
    font-size: 16px;
}
.carta{
  width: 100%;
  height: 100%;
  background: var(--fondo_main);
}

.cards_elem:hover{
  background: var(--hover_efecto);
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.conten_main{
  width: 100%;
  height: 100%;
 
}
.boton__{
  width: 70px;
  height: 70px;
}
</style>