<template>
  <v-layout  xwrap justify-center align-start text-xs-center class="elemento_cont">                
        <v-flex style="min-width: 100px; max-width: 100%;" xs12 sm7 md7  justify-center class="">
             <div class="about mt-3">
                 <router-link to="/">
                <div>
                <v-icon size="16"> fas fa-arrow-left</v-icon>
                <span class="ml-2 sub_titulos texto_resaltado">Regresar a opciones de Consulta</span>
                </div>
                 </router-link>
                     <v-flex  xs12 mt-5 sm12 md12  text-center class="" >
                    <v-btn icon class="boton__ hvr_scale">
                          <v-icon  class="iconos " size="45">fas fa-list-ol</v-icon>
                       </v-btn>
                                </v-flex>
                                    <v-flex  xs12 mt-3  sm12 md12  text-center class="" >
                                <span class="titulo_centro">Numero de Radicacion</span>
                                </v-flex>
                                        <v-flex  xs12 mt-1  sm12 md12  text-center class="" >
                                        <span class="sub_texto_litte">Aqui Encontrara la manera mas facil de consultar su proceso</span>
                                        </v-flex>

                                      <v-flex  xs12 mt-10  sm12 md12  text-center class="" >
                                                <v-text-field
                                                    class="radicacion text-xs-center centered-input animated bounceIn dura-1"
                                                    label="Ingrese los 23 digitos del numero de Radicacion"
                                                    text-xs-center
                                                    solo
                                                   v-model="radicacionid"
                                                 type="number" 
                                                ></v-text-field>
                                     </v-flex>

                       <v-flex  xs12 mt-0 sm12 md12  text-center class="" >
                                            <v-btn
                                            class="ma-2"
                                            :loading="loading2"
                                            :disabled="loading2"
                                            color="success"
                                            width="200"
                                            @click="consultar"
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

  <v-layout v-if="info" mt-5 xwrap justify-center align-start text-xs-center class="elemento_cont">                
        <v-flex style="min-width: 100px; max-width: 100%;" xs12 sm7 md7  justify-center class="">
               
                     {{info.data.tipoConsulta}}
                       {{info.data}}
        </v-flex>
  </v-layout>
                               
                                     </v-flex>
                                    
 
             </div>
             
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
            loader: null,
           radicacionid:'',
           tab:'',
             loading2: false,
              loading3: false,
              info:''

        }
    },
    methods:{
        limiarinput(){
                 this.radicacionid = ''
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

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
}
</script>
<style lang="scss" scoped>
@import '../sass/globals';
.centered-input input {
  text-align: center;
  width: 100%;
}

div.v-text-field.v-text-field--solo .v-label
{
    width: 100%;
    text-align: center;
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

.sub_texto_litte{
   font-family: Poppins-Regular;
   font-size: 16px;
   color: var(--sub_texto);
   text-transform: uppercase;
}

.texto_resaltado{
   font-family: Poppins-Regular;
   font-size: 13px;
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