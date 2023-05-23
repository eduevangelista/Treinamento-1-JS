function TocaSom(SeletorAudio) {
    const elemento = document.querySelector(SeletorAudio)
    // pode tambem colocar só elemento na linha abaixo na primeira verificação sem != null que o JS entende 
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado!')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')



for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]

    const instrumento = tecla.classList[1]

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        TocaSom(idAudio)
    }

    tecla.onkeydown = function (e) {
        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa')
        }

    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
