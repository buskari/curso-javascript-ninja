# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var objVar = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var person = {
    name: 'Andris',
    surname: 'Buscariolli',
    gender: 'male',
    age: 32,
    height: 1.71,
    weight: 66,
    walking: false,
    walked: 0
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
person.makesBirthday = function() {
    return `Fez aniversário! Agora ${person.name} tem ${++person.age} anos!`;
};

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
person.walk = function (mettersWalked) {
    person.walked += mettersWalked;
    person.walking = true;
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
person.stop = function() { person.walking = false; };

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
person.fullName = function() { return `Olá! Meu nome é ${person.name} ${person.surname}`; };

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
person.showAge = function() { return `Olá, eu tenho ${person.age} anos!`; };

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
person.showWeight = function() { return `Eu peso ${person.weight}Kg`; };

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
person.showHeight = function() { return 'Minha altura é ' + person.height + 'm.'; };

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.fullname(); // 'Olá! Meu nome é Andris Buscariolli'

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.showAge(); // 'Olá, eu tenho 33 anos!'

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.showWeight(); // 'Eu peso 66Kg'

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.showHeight(); // 'Minha altura é 1.71m.'

/*
Faça a `pessoa` fazer 3 aniversários.
*/
person.makesBithday();
person.makesBithday();
person.makesBithday();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
person.showAge(); // 'Olá, eu tenho 35 anos!'

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
person.walk(100);
person.walk(200);
person.walk(400);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.walking; // true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
person.stop();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
person.walking; // false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
person.walked; // 700

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
person.apresentacao = function() {
    let gender = person.gender == 'male' ? 'o ' : 'a ';
    let age = person.age == 1 ? ' ano' : ' anos';
    let metters = person.walked == 1 ? ' metro!' : ' metros!';

    return 'Olá, eu sou ' + gender + person.name + ' ' + person.surname + ', tenho ' + person.age + age + ', ' + person.height + 'm, meu peso é ' + person.weight + 'Kg e, só hoje eu já caminhei ' + person.walked + metters;
};

// Agora, apresente-se ;)
person.apresentacao();
```