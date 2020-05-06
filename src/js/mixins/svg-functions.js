export default {
    data() {
      return {};
    },
    methods: {
      addZoomAnimation(elemento) {
        this.showElement(elemento);
        elemento.style.transformBox = "fill-box";
        elemento.style.transformOrigin = "center center";
        elemento.classList.add("anim-zoom");
        elemento.classList.add("focus");
        elemento.style.cursor = "pointer";
      },
      removeZoomAnimation(elemento) {
        elemento.classList.remove("anim-zoom");
        elemento.classList.remove("focus");
      },
      hasAnimation(elemento) {
        return elemento.classList.contains("anim-zoom");
      },
      hideElement(elemento) {
        elemento.style.display = "none";
      },
      showElement(elemento) {
        elemento.style.display = "block";
      },
      isDisplayElement(elemento) {
        return elemento.style.display == "block" || elemento.style.display == "";
      },
      addgrow(elemento) {
        this.showElement(elemento);
        elemento.classList.add("hvr-grow");
        elemento.style.cursor = "pointer";
      }
    }
  };