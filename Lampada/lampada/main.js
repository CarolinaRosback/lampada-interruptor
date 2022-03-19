
function ligaDesliga(){
 var lampadaHtml = document.getElementById('lampada').src;
 var interruptorHtml = document.getElementById('interruptor').src;
 var lampadaAcessa = 'https://www.w3schools.com/js/pic_bulbon.gif';
 var lampadaApagada = 'https://www.w3schools.com/js/pic_bulboff.gif';
 var interruptorAcesso = 'acesso.jpg';
 var interruptorApagado = 'apagado.jpg';

    if (lampadaHtml == lampadaAcessa) {
        document.getElementById('lampada').src = lampadaApagada;
        document.getElementById('interruptor').src = interruptorApagado;
        document.body.style.background = "black";
        console.log(interruptorApagado)
    } if(lampadaHtml == lampadaApagada) {
        document.getElementById('lampada').src = lampadaAcessa;
        document.getElementById('interruptor').src = interruptorAcesso;
        document.body.style.background = "white";
        console.log(interruptorAcesso)
    }

    
    
}

var body = document.body;

var template = `

<img src="https://www.w3schools.com/js/pic_bulboff.gif" alt="" " id="lampada">
<img src="apagado.jpg" alt="" id="interruptor">

`;
body.innerHTML += template;

document.getElementById("interruptor").addEventListener("click", ligaDesliga);