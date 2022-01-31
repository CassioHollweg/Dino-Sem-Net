let dino = document.querySelector('#dino')
let cacto = document.querySelector('#cacto')

function pular(){
    if(dino.classList != 'animacao'){
        dino.classList.add('animacao')
    }

    setTimeout(function(){
        dino.classList.remove('animacao')
    },500)
}

var testeColisao = setInterval( function(){

    var topoDino = parseInt(
        window.getComputedStyle(dino).getPropertyValue('top')
    )
    var cactoEsquerda = parseInt(
        window.getComputedStyle(cacto).getPropertyValue('left')
    )

    if(cactoEsquerda < 20 && cactoEsquerda > 0 && topoDino >=130){
        cacto.style.animation = 'none'
        cacto.style.display = 'none'
        alert('Fim de jogo \nPressione F5 pra recomeçar');
    }
}, 10)