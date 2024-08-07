
// Remoção gradual do preloader e inicio do AOS
function removePreloader() {
    var preloader = document.getElementById('tela');
    if (preloader) {
      var opacity = 1;
      var interval = setInterval(function() {
        opacity -= 0.05; // Diminuir a opacidade aos poucos
        preloader.style.opacity = opacity;
        if (opacity <= 0) {
          clearInterval(interval);
          preloader.remove(); // Remover a div de preloader apos a conclusão do efeito de fade
  
          // Iniciar o AOS quando terminar o preloader
          AOS.init({
            duration: 1000,
            once: true,
          });
        }
      }, 50); // velocidade do fade
    }
  }
  
  // Chamar a funçao para remover o preloader apos um tempo
setTimeout(function() {
  removePreloader();
}, 2000); // Defini um tempo suficiente para o preloader ser exibido
