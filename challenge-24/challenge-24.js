(function (window, document){ 
  'use strict';
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

  function initialize() {
    initEvents();
  }

  function initEvents() {
    Array.prototype.forEach.call($buttons, button => {
      button.addEventListener('click', handleClick);
    })
  }

  function handleClick () {
    if (this.value.match(/\d/)) {
      removeUnecessaryZero(this);
    } else if (this.value === 'ce') {
        $visor.value = '0';
    } else if (this.value === '=') {
      handleEqualSign();
  } else {
     replaceOperatorAtTheEnd(this);
    }
  }

  function removeUnecessaryZero(button) {
    if ($visor.value === '0') {
      $visor.value = button.value;
    } else {
      $visor.value += button.value;
    }
  }

  function handleEqualSign() {
    const res = $visor.value.match(/(?:\d+)[\/*+-]?/g);
      $visor.value = res.reduce(calculate);
  }

  function calculate (accumulated, value) {
    let firstNumber = accumulated.slice(0,-1);
    let operator = accumulated.slice(-1);
    let secondNumber = getSecondNumber(value);
    let nextOperator = getNextOperator(value);
    return executeOperation(firstNumber, secondNumber, operator) + nextOperator;
  }

  function getNextOperator(value) {
    return value.slice(-1).match(/\D/) ? value.slice(-1) : '';
  }

  function getSecondNumber(value) {
    return value.slice(-1).match(/\D/) ? value.slice(0,-1) : value;
  }

  function executeOperation(firstNumber, secondNumber, operator) {
    switch (operator) {
      case '+':
        return Number(firstNumber) + Number(secondNumber);
      case '-':
        return Number(firstNumber) - Number(secondNumber);
      case '*':
        return Number(firstNumber) * Number(secondNumber);
      case '/':
        return Number(firstNumber) / Number(secondNumber);
   }
  }

  function replaceOperatorAtTheEnd(button) {
    if ($visor.value[$visor.value.length-1].match(/\D/)) {
      $visor.value =  $visor.value.slice(0, -1) + button.value;
    } else {
      $visor.value += button.value;
    }
  }

  initialize();
})(window, document)