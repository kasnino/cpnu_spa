<template>
  <footer class="footer_pos">
<v-img justify-center class="imagen__footer elevation-10 fsooter_pos" elevation="7" text-xs-center text-center src="@/assets/bg-footer.png">

         <v-layout wrap justify-center align-start text-xs-center tclass="elemento_cont">                
        <v-flex xs12 sm8 ma-4 pa-4 md8 justify-center class="  footer_litte">
                     <router-link :to="ruta">
                         <span class="texto_resaltado"> Politicas de Privacidad y Condiciones de Uso<br></span>
                     </router-link>
                        Calle 12 No. 7 - 65 Bogotá Colombia<br>
                        Soporte: Teléfono 5658500 Ext 7559 o al correo electrónico<br> soportepaginaweb1@cendoj.ramajudicial.gov.co
                    </v-flex>
                    <v-flex xs12 sm3 ma-4 pa-4 md3 justify-center class=" text-xs-center  footer_litte">
                        <span class="texto_resaltado"> Reporte Visitas<br></span>
                            Total Visitantes: 1872681<br>
                            Visitantes: 9879<br>
                        </v-flex>
         </v-layout>  

  
    
</v-img>
  </footer>
</template>

<script>
  export default {
    data: () => ({
      ruta:'/newayuda',
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-youtube',
        'fab fa-linkedin',
        // 'fab fa-instagram',
      ],
      urldom:[ 
        'https://www.facebook.com/dominioestudio/',
        'https://twitter.com/dominioestudio?lang=es',
        'https://www.youtube.com/channel/UCPOt3k2rvVeTV63owPQb0gg',
        'https://www.linkedin.com/company/dominioestudio/?originalSubdomain=co',

      ]
    }),
  }
</script>
<style lang="scss" scoped>
@import '../sass/globals';

.texto_resaltado{
    color: #337ab7;
    font-size: 12px;

}

.texto_resaltado:hover{
   text-decoration: underline;
    font-size: 12px;
   text-decoration-color: #337ab7;
   color: white;

}
.nk-footer{
//     background: #19325b url('../assets/bg-footer.png')50%;
//   background-size: contain;
//   width: 100%;

  font-family: Poppins-Regular;
}

    .v-application a {
     text-decoration: none;
}
.descriccion{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
color: white;

}
.footer_litte{
color: white;
font-size: 12px;

}

.imagen__footer{
    width: 100%;
    height: 140px;
    background: #19325b;
}
a{
  
  color: white!important;
}
</style>