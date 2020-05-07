<template>
    <header class="header-pos">
             <v-layout mt-0 wrap grow justify-center align-start text-xs-center tclass="elemento_cont">                
        <v-flex xs12 sm12 md12  grow :key="index" justify-center class="  footer_litte">
                   
                                        <v-card
                                              class="mx-auto carta"
                                              active-class="carta"
                                              max-width="auto"
                                              height="190"
                                              elevation="4"
                                              tile
                                            >
                                             <v-layout justify-center align-center text-xs-center class="">
                                                  <v-layout  justify-center align-center text-xs-center class="">
                                                    <v-flex  mt-5 xs3 sm3 md3  text-center class="cabezera_main" >
                                                        <div>
                                                        <v-img  justify-center text-xs-center text-center class="logo_escudos" 
                                                        :style="{left: '50%', transform:'translateX(-50%)', top:'25%'}"
                                                         src="@/assets/logo1.png">
                                                         </v-img>
                                                        </div>
                                                           <div  class="mt-4">
                                                            <v-btn text depressed small class="boton__">Inicio</v-btn>
                                                        </div>
                                                    </v-flex>
                                                  </v-layout>
                                                     
                                                    <v-flex  xs6 sm6 md6 text-xs-center justify-center  align-center class="cabezera_main" >
                                                  
                                      
                                                   <v-layout   justify-center align-center text-xs-center class="">
                                                      <v-flex  xs2 sm2 md2  class="cabezera_main centrar_elem" >
                                                               <v-btn icon class="boton__ hvr_scale">
                                                                <v-icon size="30" color="#3c91a5" class="iconos">fas fa-eye</v-icon>
                                                                </v-btn> 
                                                            </v-flex>
                                                                <v-flex  xs8 sm8 md8  text-center class="cabezera_main" >
                                                                          <div  class="mt-4 fechas_actual">
                                                                           {{hoy}} de {{meses[mes-1]}} - {{year}}
                                                                 </div>
                                                                 <div class="mt-6 titulo_main__portada">
                                                                     CONSULTA DE PROCESOS NACIONAL UNIFICADA</div>
                                                                   
                                                                </v-flex>
                                                                   <v-flex  xs2 sm2 md2  text-center class="cabezera_main" >
                                                                   </v-flex>
                                                                    
                                                    </v-layout>
                                                    </v-flex>
                                                    
                                                <v-layout   justify-center align-center text-xs-center class="">
                                                           <v-flex  mt-5 xs3 sm3 md3  text-center class="cabezera_main" >
                                                        <div>
                                                        <v-img  justify-center text-xs-center text-center class="logo_escudos" 
                                                        :style="{left: '50%', transform:'translateX(-50%)', top:'25%'}"
                                                         src="@/assets/EscudoColombia.png">
                                                         </v-img>
                                                        </div>
                                                           <div  class="mt-4">
                                                            <v-btn depressed small text class="boton__">Ayuda</v-btn>
                                                          </div>
                                                        <div class="posicionar">
                                                             <v-switch
                                                            v-model="changescolor"
                                                          ></v-switch>
                                                     </div>
                                                           
                                                      
                                                    </v-flex>
                                                              </v-layout>
                                                      
                                             </v-layout>
   
                                             </v-card>  
                  
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
            meses:['Ene', 'Feb', 'Mar', 'Abr', 'Mayo', 'Jun'],
            color:['#91be91','#ffd20f', '#4f90c8', '#cb302f', '#0a7a39'],
            textos:[
                'Consejo Superior de la Juricatura',
                'Corte Suprema de la justicia',
                'Consejo de Estado',
                'Corte Constitucional',
                'Sala Jurisdiccional Disciplinaria'
            ],
            hoy:'',
            mes:'',
            year:'',
             changescolor: true,

        
        }
    },
    methods: {    
        getData(data) {
            return data
        },
                    cambiocolor(){
      console.log("clik en el label")
           
    },
    },
    created() {
        var d = new Date();
        this.hoy = d.getUTCDate()-1;
        this.mes = d.getMonth() + 1;
        this.year = d.getUTCFullYear();
        
       
    },
    methods: {
     
    },
    computed: {
        
    },
    watch: {
        changescolor(){
 
            const thema = document.getElementById("thema");
            if(this.changescolor){
                thema.classList.remove("themalight")
                thema.classList.add("themadark")
                 this.changescolor = true
            }else{
                thema.classList.add("themalight")
                thema.classList.remove("themadark")
                      this.changescolor = false
            }
        }
      
    }

}
</script>
<style lang="scss" scoped>
@import '../sass/globals';

 @media (max-width: 600px) {
.titulo_main__portada{
    font-family: Poppins-SemiBold;
     color:var(--color_letra);
        font-size: 14px;
    line-height: 21px;
}

 }
.boton__{
    color: #337ab7;
    cursor: pointer;
}
.posicionar{
    position: absolute;
    right: 10px;
    top: 10px;
}

.carta{
    width: 100%;
    height: 100%;
    background: var(--fondo_main);
}
.centrar_elem{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

 @media (min-width: 600px) {
.titulo_main__portada{
    font-family: Poppins-SemiBold;
     color:var(--color_letra);
     font-size: 1.8em;
     line-height: 35px;
}

 }
.iconos{
     color:var(--color_letra);
}
.iconos:hover{
    color:var(--color_letra);
}
.fechas_actual{
     color: #337ab7;
      font-family: Poppins-Regular;
      font-size: 16px;
}
.logo_escudos{
    width: 180px;
    height: 120px;
}
.cabezera_main{
    width: 100%;
    height: 180px;}
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
    font-size: 15px;
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
  font-size: 15px;
}
</style>