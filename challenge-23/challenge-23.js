(function( window, document ) {
    'use strict';
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-), multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE" que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da operação no input. Se o último caractere no input já for um símbolo de alguma operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    const $visor = document.querySelector('[data-js="visor"]');
    const $buttons = document.querySelectorAll('button');

    Array.prototype.forEach.call( $buttons, button => {
        button.addEventListener('click', () => {
            if (button.value.match(/\d/)) {
                if ($visor.value === '0') {
                    $visor.value = button.value;
                } else {
                    $visor.value += button.value;
                }
            } else if (button.value === 'ce') {
                $visor.value = '0';
            } else if (button.value === '=') {
                const res = $visor.value.match(/(?:\d+)[\/*+-]?/g);
                $visor.value = res.reduce((accumulated, value) => {
                    let firstNumber = accumulated.slice(0,-1);
                    let operator = accumulated.slice(-1);
                    let secondNumber = value;
                    let result;
                    if (value.slice(-1).match(/\D/)) {
                        secondNumber = value.slice(0,-1);
                        var nextOperator = value.slice(-1);
                    }
                    switch (operator) {
                        case '+':
                            result = Number(firstNumber) + Number(secondNumber);
                            result.toString();
                            if (nextOperator) {
                                result += nextOperator;
                            }
                            return result;
                        case '-':
                            result = Number(firstNumber) - Number(secondNumber);
                            result.toString();
                            if (nextOperator) {
                                result += nextOperator;
                            }
                            return result;
                        case '*':
                            result = Number(firstNumber) * Number(secondNumber);
                            result.toString();
                            if (nextOperator) {
                                result += nextOperator;
                            }
                            return result;
                        case '/':
                            result = Number(firstNumber) / Number(secondNumber);
                            result.toString();
                            if (nextOperator) {
                                result += nextOperator;
                            }
                            return result;
                        default:
                            return 'SynstaxError';
                    }
                })
            } else {
                if ($visor.value[$visor.value.length-1].match(/\D/)) {
                    $visor.value =  $visor.value.slice(0, -1) + button.value;
                } else {
                    $visor.value += button.value;
                }
            }
        })
    })
    
})( window, document )