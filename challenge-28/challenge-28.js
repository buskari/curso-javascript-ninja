(function(window, document) {
  'use strict';
/*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://ws.apicep.com/cep.json?code=[CEP]", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
  let ajax = new XMLHttpRequest();
  let $inputCep = document.querySelector('[data-js="cep"]');
  let $logradouro = document.querySelector('[data-js="logradouro"]');
  let $bairro = document.querySelector('[data-js="bairro"]');
  let $estado = document.querySelector('[data-js="estado"]')
  let $cidade = document.querySelector('[data-js="cidade"]')
  let $send = document.querySelector('button');
  let $h3 = document.querySelector('h3');
  let url = 'https://ws.apicep.com/cep.json?code=';


  $send.addEventListener('click', handleClick);
  
  function handleClick() {
    ajax.open('GET', url + cleanCep($inputCep.value));  
    ajax.onload = function() {
      if(ajax.status === 200) {
        $logradouro.value = JSON.parse(ajax.responseText).address;
        $bairro.value = JSON.parse(ajax.responseText).district;
        $estado.value = JSON.parse(ajax.responseText).state;
        $cidade.value = JSON.parse(ajax.responseText).city;

        $h3.innerHTML = `Endereço referente ao CEP: ${$inputCep.value}`;
      } else {
        $h3.innerHTML = `Não encontramos endereço para o CEP: ${$inputCep.value}`;
        console.log(JSON.parse(ajax.responseText))
      }
    }
    ajax.send();
  }

  function cleanCep(cep) {
    return cep.replace(/(\D)/g, '')
  }
  
})(window, document);