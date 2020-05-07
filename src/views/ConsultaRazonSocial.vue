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
                          <v-icon  class="iconos " size="45">fas fa-file-invoice</v-icon>
                       </v-btn>
                </v-flex>
                     <v-flex  xs12 mt-3  sm12 md12  text-center class="" >
                   <span class="titulo_centro">Consulta por Nombre o Razón Social</span>
                   
                </v-flex>
                   <v-flex  xs12 mt-1  sm12 md12  text-center class="" >
                   <span class="sub_texto_litte">Sujeto Procesal</span>

                   {{info}}
                </v-flex>
             </div>
             
        </v-flex>
  </v-layout>

</template>
<script>
import axios from "axios";
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
   
  },
      data() {
        return {
           tab:'',
           info: null
        }
    },
     created() {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
      console.log(result.data);
    })
  },
      mounted () {
              axios
                .get('https://consultaprocesos.ramajudicial.gov.co:444/api/v1/Procesos/NumeroRadicacion/05001600020620120063900')
                .then(response => (this.info = response))
            }
}
</script>
<style lang="scss" scoped>
@import '../sass/globals';

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
</style>