function mostrarSecao(secao) {
    // Oculta todas as seções
    var secoes = document.getElementsByClassName('box');
    for (var i = 0; i < secoes.length; i++) {
        secoes[i].classList.remove('visible');
    }

    // Mostra a seção selecionada principio semelhante dos slides
    var secaoSelecionada = document.getElementById(secao);
    secaoSelecionada.classList.add('visible');
}