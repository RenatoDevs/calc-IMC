
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = (document.getElementById('altura').value)/100;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
   

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';
        
        if (valorIMC < 17 ) {
            classificacao = 'Muito abaixo do peso. ';
        }else if(valorIMC < 18.5){
            classificacao = 'abaixo do peso. ';
            
            
        }else if(valorIMC < 25){
            classificacao = 'com o peso normal';
        }else if(valorIMC < 30){
            classificacao = 'um pouco acima do peso';
        }else if(valorIMC < 35){
            classificacao = 'com obesidade grau 1';
        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau 2';
        }else{
            classificacao = 'com obesidade grau 3 (Mórbida)';
        }

        resultado.textContent = nome + ' o seu imc é ' + valorIMC + ' e você está ' + classificacao;

    } else {
        resultado.textContent = 'Preencha todos os campos'
    }

}

calcular.addEventListener('click', imc);

