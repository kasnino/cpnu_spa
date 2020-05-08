<template>
  <v-layout  wrap justify-center align-start text-xs-center class="elemento_cont">     
               
        <v-flex style="min-width: 100px; max-width: 100%;" xs12 sm7 md7  justify-center class="">
             <div class="about mt-3">
                 <router-link to="/">
                <div class="ml-3">
                <v-icon size="16"> fas fa-arrow-left</v-icon>
                <span class="ml-2 sub_titulos texto_resaltado">Regresar a opciones de Consulta</span>
                </div>
                 </router-link>
                     <v-flex  xs12 mt-10 sm12 md12  text-center class="" >
                    <v-btn icon class="boton__ hvr_scale">
                          <v-icon  class="iconos " size="47">fas fa-list-ol</v-icon>
                       </v-btn>
                                </v-flex>
                                    <v-flex  xs12 mt-8  sm12 md12  text-center class="" >
                                <span class="titulo_centro">Numero de Radicacion</span>
                                </v-flex>

                                 <v-layout  xwrap justify-center align-start text-xs-center class="textos_pe">
                                        <v-flex  xs8 mt-1  sm12 md12  text-center class="" >
                                        <span class="sub_texto_litte">Aqui Encontrara la manera mas facil de consultar su proceso</span>
                                        </v-flex>
                                 </v-layout>     
                <v-layout  wrap justify-center align-start text-xs-center class=""> 
                                      <v-flex  xs10 mt-10  sm12 md12  text-center class="" >
                                                <v-text-field
                                                    class="radicacion text-xs-center centered-input animated bounceIn dura-1"
                                                    label="Ingrese los 23 digitos del numero de Radicacion"
                                                    text-xs-center
                                                    solo
                                                   v-model="radicacionid"
                                                 type="number" 
                                                ></v-text-field>
                                     </v-flex>
                </v-layout>

                       <v-flex  xs12 mt-0 sm12 md12  text-center class="" >
                                            <v-btn
                                            class="ma-2"
                                            :loading="loading2"
                                            :disabled="loading2"
                                            color="success"
                                            width="200"
                                             @click="loader = 'loading2',consultar()"
                                            >
                                            Consultar
                                            <template v-slot:loader>
                                                <span>Cargando data...</span>
                                            </template>


                                            </v-btn>


                             <router-link to="/NumeroRadicacion">
                                               <v-btn
                                            class="ma-2"
                                            :loading="loading3"
                                            :disabled="loading3"
                                            color="blue-grey"
                                            dark
                                            width="200"
                                              @click="limiarinput"
                                            >
                                            Nueva Consulta
                                            </v-btn>
                             </router-link>



                               
                                     </v-flex>
                                    
 
             </div>
             
        </v-flex>

                      
 <v-flex v-if="info" mt-6 style="min-width: 100px; max-width: 100%;" xs12 sm10 md10   justify-center class="">
        <table class="">
          <thead>
            <tr>
              <th>Consultado</th>
              <th>Numero de Radicacion</th>
              <th>Fecha de Radicacion</th>
              <th>Clase</th>
              <th>Ponente</th>
              <th>Sujetos Procesales</th>
            </tr>
          </thead>
  <tbody>
    <tr v-if="info" >
      <td>{{info.data.procesos[0]["idProceso"]}}</td>
      <td>{{info.data.procesos[0]["llaveProceso"]}}</td>
      <td>{{info.data.procesos[0]["fechaProceso"]}}</td>
      <td>{{info.data.procesos[0]["claseProceso"]}}</td>
      <td>{{info.data.procesos[0]["ponente"]}}</td>
       <td>{{info.data.procesos[0]["sujetosProcesales"]}}</td>
     
    </tr>
  </tbody>
</table>
                  <template>
              <v-divider></v-divider>
            </template>

        </v-flex>
 
  </v-layout>

</template>
<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: 'Home',
  components: {
   
  },
      data() {
        return {
             color:['#91be91','#ffd20f', '#4f90c8', '#cb302f', '#0a7a39'],
            textos:[
                'Consultado',
                'Numero de Radicacion',
                'Fecha de Radicacion',
                'Clase',
                'Ponente',
                'Sujetos Procesales',
            ],
            loader: null,
           radicacionid:'',
           tab:'',
             loading2: false,
              loading3: false,
              info:'',
    

        }
    },
    methods:{
        limiarinput(){
                 this.radicacionid = ''
                 this.info= ''
        },
   consultar() {
              axios
                .get(`https://consultaprocesos.ramajudicial.gov.co:444/api/v1/Procesos/NumeroRadicacion/${this.radicacionid}`)
                .then(response => (this.info = response))
               
            },
    },
    
            watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 2800)

        this.loader = null
      },
    },
}
</script>
<style lang="scss" scoped>
@import '../sass/globals';

 th{
  background: var(--color_tabla);
   font-family: Poppins-SemiBold;
    font-size: 14px;
    color: #666666;
}
th, tr {
    border: 1px solid var(--border_tb);
    
     //Cualquier otro tipo de borde como bottom que es el inferior o ninguno 
}

td {
    border-style: none;
    
     //Cualquier otro tipo de borde como bottom que es el inferior o ninguno 
}
table, thead { 
    border: 1px solid var(--border_tb);
    
	}

td{
  
  font-family: Poppins-SemiBold;
    font-size: 12px;
    color: var(--dark_svgacces);
 
}
/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
  
  
 td:nth-of-type(1){
  background: #e8f5e9;
   font-family: Poppins-SemiBold;
    font-size: 12px;
    color: #666666;
}
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	/*
	Label the data
	*/
	td:nth-of-type(1):before { content: "Consultado"; }
	td:nth-of-type(2):before { content: "Numero de Radicacion"; }
	td:nth-of-type(3):before { content: "Fecha de Radicacion"; }
	td:nth-of-type(4):before { content: "Clase"; }
	td:nth-of-type(5):before { content: "Ponente"; }
	td:nth-of-type(6):before { content: "Sujetos Procesales"; }
}

.texto_interno{
    color: #666666;
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

.texto_interno_dos{
    color: #666666;
      align-items: center;
  bottom: 0;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: Poppins-SemiBold;
    font-size: 12px;
}
.theme--light.v-btn.v-btn--icon {
  color: var(--texto_land);
}
.centered-input input {
  text-align: center;
  width: 100%;
}


div.v-text-field.v-text-field--solo .v-label
{
    width: 100%;
    text-align: center;
}

 @media (max-width: 600px) {

.sub_texto_litte{
   font-family: Poppins-Regular;
   font-size: 13px;
   color: var(--sub_texto);
  
   
}


.textos_pe{
   line-height: 10px;
}
 }
.radicacion{

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
     font-family: Poppins-Regular;
     text-align: center;
}

.sub_titulos{
   font-family: Poppins-Regular;
   font-size: 13px;
   color: var(--sub_texto);
}

 @media (min-width: 600px) {

.sub_texto_litte{
   font-family: Poppins-Regular;
   font-size: 16px;
   color: var(--sub_texto);
   text-transform: uppercase;
}
 }


.texto_resaltado{
   font-family: Poppins-Regular;
   font-size: 12px;
   color: var(--sub_texto);
   cursor: pointer;

}

.texto_resaltado:hover{
   text-decoration: underline;
    font-size: 13px;
   text-decoration-color: var(--sub_texto);
   color: var(--sub_texto);

}
 .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>