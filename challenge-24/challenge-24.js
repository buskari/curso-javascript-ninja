(function (window, document){ 
  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
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

  function handleClick () {
    
  }
})(window, document)