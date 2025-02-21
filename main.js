function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
};

const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeAudio = document.querySelectorAll('audio');

let contador = 0;

while(contador < listaDeTeclas.length){
    const instrumento = listaDeTeclas[contador].classList[1];
    console.log(instrumento)

    listaDeTeclas[contador].onclick = function (){
        tocaSom('#som_' + instrumento);
    };
    contador += 1;
}
