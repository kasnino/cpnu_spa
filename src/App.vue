<template>
  <div id="app">
    <v-app id="thema" class="themalight">
      <!-- header -->
      <!-- <header-app :simple="true"></header-app> -->
      <header-app class="header"></header-app>
      <SubHeader-app></SubHeader-app>
      <v-container class="container" fluid ma-0 pa-0>
        <main >
          <router-view />
             <!-- footer -->
        </main>
      </v-container>   
           <footer-app></footer-app>  
    </v-app>
  </div>
</template>
<script>


export default {
  beforeCreate(){
    const locale = localStorage.getItem('language')
    if (locale) {
      this.$store.state.language = locale      
      localStorage.setItem('language',locale)
    }else{      
      //this.$store.state.locale = navigator.language.substring(0,2);
      //this.$store.commit('chLanguage',navigator.language.substring(0,2))
      this.$store.state.language = 'en'
      localStorage.setItem('language','en')
    }
  }
};
</script>

<style lang="scss">
@import "sass/globals";

@font-face {
  font-family: Poppins-Regular;
  src: url("./assets/fonts/Poppins-Regular.ttf");
}
@font-face {
  font-family: Poppins-SemiBold;
  src: url("./assets/fonts/Poppins-SemiBold.ttf");
}
@font-face {
  font-family: Poppins-Bold;
  src: url("./assets/fonts/Poppins-Bold.ttf");
}
@font-face {
  font-family: Poppins-BoldItalic;
  src: url("./assets/fonts/Poppins-BoldItalic.ttf");
}
@font-face {
  font-family: Poppins-Black;
  src: url("./assets/fonts/Poppins-Black.ttf");
}
@font-face {
  font-family: Poppins-Italic;
  src: url("./assets/fonts/Poppins-Italic.ttf");
}
@font-face {
  font-family: Poppins-Medium;
  src: url("./assets/fonts/Poppins-Medium.ttf");
}
@font-face {
  font-family: Poppins-MediumItalic;
  src: url("./assets/fonts/Poppins-MediumItalic.ttf");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
   background: var(--fondo_landing);
  width: 100vw;
 min-height: 100%; 
}
</style>
