<template>
    <header class="header-pos">
             <v-layout mt-0 wrap grow justify-center align-start text-xs-center tclass="elemento_cont">                
        <v-flex xs12 sm12 md12  grow :key="index" justify-center class="  footer_litte">
                   
                                        <v-card
                                              class="mx-auto carta"
                                              active-class="carta"
                                              max-width="auto"
                                              height="auto"
                                              elevation="4"
                                              tile
                                            >
                                             <v-layout justify-center align-center text-xs-center class="">
                                                
                                                    <v-flex  mt-4 ml-10 xs2 sm2 md2  text-center class="cabezera_main" >
                                                        <div>
                                                        <v-img  :contain="true" justify-center text-xs-center text-center class="logo_escudos" 
                                                        :style="{left: '50%', transform:'translateX(-50%)', top:'25%'}"
                                                         src="@/assets/logo1.png">
                                                         </v-img>
                                                        </div>
                                                           <div  class="mt-4">
                                                            <v-btn  style="font-family:Poppins-Regular;" text depressed small class="boton__">Inicio</v-btn>
                                                        </div>
                                                    </v-flex>
                                                  
                                                         <v-flex   xs2 sm2 md2  class="cabezera_main centrar_elem" >
                                                               <v-btn icon class=" eye_posicion boton__ hvr_scale">
                                                                <v-icon size="30" color="#3c91a5" class=" iconos">fas fa-eye</v-icon>
                                                                </v-btn> 
                                                            </v-flex>
                                                    <v-flex  xs4 sm4 md4 text-xs-center justify-center  align-center class="cabezera_main" >
                                                  
                                      
                                                   <v-layout   justify-center align-center text-xs-center class="">
                                                  
                                                                <v-flex  xs12 sm12 md12  text-center class="cabezera_main" >
                                                                          <div  class="mt-4 fechas_actual">
                                                                           {{hoy}} de {{meses[mes-1]}} - {{year}}
                                                                 </div>
                                                                   <v-flex xs12 sm12 md12  text-center class="" >
                                                                 <h1 class="mt-6 titulo_main__portada">
                                                                     CONSULTA DE PROCESOS NACIONAL UNIFICADA</h1>
                                                                   </v-flex>
                                                                </v-flex>
                                                                  
                                                                    
                                                    </v-layout>
                                                    </v-flex>
                                                     <v-flex  xs2 sm2 md2  text-center class="cabezera_main" >
                                                       <!-- aqui va el icono de inicio de secion -->
                                                        </v-flex>
                                                
                                               
                                                           <v-flex mt-4 mr-10  xs2 sm2 md2  text-center class="cabezera_main" >
                                                        <div>
                                                        <v-img  :contain="true" justify-center text-xs-center text-center class="logo_escudos" 
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
   
                                             <v-tabs-slider class="barra_" centered grow :color="selectcolor"></v-tabs-slider>

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
            selectcolor:'#19325b',
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
             changescolor: false,

        
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
        this.hoy = d.getUTCDate();
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


 @media (max-width: 702px) {
.titulo_main__portada{
    font-family: Poppins-SemiBold;
     color:var(--color_letra);
        font-size: 15px;
    line-height: 21px;
}

.barra_{
    width: 100%;
    height: 3px;

}

.eye_posicion{
    position: absolute;
    top: 5px;
    left: 7px;
}

 }
.boton__{
    color: #337ab7;
    cursor: pointer;
      font-family: Poppins-Regular;
   
}
.posicionar{
    position: absolute;
    right: 5px;
    top: -10px;
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

 @media (min-width: 703px) {
.titulo_main__portada{
    font-family: Poppins-SemiBold;
     color:var(--color_letra);
     font-size: 1.7em;
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