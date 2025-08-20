function mudartexto() {
    const textoMudar = document.getElementById("título")
    textoMudar.innerHTML = "<strong>Texto alterado com sucesso<strong/>";
}


function saudação() {

const inputNome = document.getElementById('mudarNome');
const paragrafoSaudacao = document.getElementById('saudação21');


    const nome = inputNome.value;
    paragrafoSaudacao.innerText = `Olá, ${nome}!`; 

};

document.addEventListener('DOMContentLoaded', function() {
    const caixa = document.getElementById('quadrado');
    const botao = document.getElementById('botaoMudaCor');

    botao.addEventListener('click', function() {
        caixa.style.backgroundColor = 'blue';
    });
});