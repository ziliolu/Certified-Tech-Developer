console.log('\n')
console.log('--------MENU-------');
console.log('\n')

console.log('Selecione a opção desejada:');
console.log('1 - Pipoca');
console.log('2 - Macarrão');
console.log('3 - Carne');
console.log('4 - Feijão');
console.log('5 - Brigadeiro');


function selecionaComida (alimento, tempo){
    switch(alimento){
        case 1: 
            let tempoPipoca = 10
            return selecionaTempo (tempoPipoca,tempo); 
        case 2:
            let tempoMacarrao = 8;
            return selecionaTempo (tempoMacarrao,tempo);
        case 3: 
            let tempoCarne = 15;
            return selecionaTempo (tempoCarne,tempo);
        case 4:
            let tempoFeijao = 12;
            return selecionaTempo (tempoFeijao,tempo);
        case 5:
            let tempoBrigadeiro = 8
            return selecionaTempo (tempoBrigadeiro,tempo);
        default:
            return 'Prato Inexistente.';
    }
}


function selecionaTempo (tempoPadrao,tempoSelecionado){
    if ((tempoSelecionado > 2*tempoPadrao) && (tempoSelecionado < 3*tempoPadrao)){
        return 'Sua comida queimou.'
    }else if ((tempoSelecionado) >= (tempoPadrao*3)){
        return 'KABUMMM!'
    }else if (tempoSelecionado < tempoPadrao){
        return 'Tempo insuficiente.'
    }
    return 'Seu prato está pronto. Bom apetite!'
    
}

console.log('\n');
console.log(selecionaComida(5,13));
console.log('\n')