let mensagem = document.getElementById('mensagem')
let mensagemVoto = document.getElementById('votado')

let votos = {
    Brasil: 0,
    Argentina: 0,
    França: 0
}

function votar(selecao){
    votos[selecao]++;
     mensagemVoto.innerHTML = 'Voto registrado para ' + selecao;
}

function mostrarResultado(){
    let vencedor = '';
    let maiorVoto = -1;

    for(selecao in votos){
        if(votos[selecao] > maiorVoto){
            maiorVoto = votos[selecao];
            vencedor = selecao;
        }
    }
    if(votos['Brasil'] == votos['Argentina'] && votos['Argentina'] == votos['França']){
        mensagem.innerHTML += 'Deu empate!'
    }else{
        mensagem.innerHTML += 'A seleção mais votada foi: ' + vencedor + ' com ' + maiorVoto + ' votos! :)';
    }
}