function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }

    else {
        console.log('Elemento ou não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
            if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

const elementoBody = document.querySelector("body");
elementoBody.onkeyup = function (evento) {
    switch (evento.code) {
        case 'Numpad1':
            tocaSom('#som_tecla_psh');
            break;
        case 'Numpad2':
            tocaSom('#som_tecla_tic');
            break;
        case 'Numpad3':
            tocaSom('#som_tecla_tom');
            break;
        case 'Numpad4':
            tocaSom('#som_tecla_puff');
            break;
        case 'Numpad5':
            tocaSom('#som_tecla_splash');
            break;
        case 'Numpad6':
            tocaSom('#som_tecla_toim');
            break;
        case 'Numpad7':
            tocaSom('#som_tecla_pom');
            break;
        case 'Numpad8':
            tocaSom('#som_tecla_clap');
            break;
        case 'Numpad9':
            tocaSom('#som_tecla_tim');
            break;
        default:
            break;
    }
}
