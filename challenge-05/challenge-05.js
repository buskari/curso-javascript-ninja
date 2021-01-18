/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [0, 1, 2, 3, 4];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function receiveArr(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(receiveArr(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrNumber(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ['Andris', 32, true, [0, 1, 2], {name: 'Andris', age: 32}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
arrNumber(arr2, 0);
arrNumber(arr2, 1);
arrNumber(arr2, 2);
arrNumber(arr2, 3);
arrNumber(arr2, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (bookName) {
    var obj = {
        'bookA': {
            quantidadePaginas: 200,
            autor: 'Autor do Livro A',
            editora: 'Editora do Livro A'
        },
        'bookB': {
            quantidadePaginas: 300,
            autor: 'Autor do Livro B',
            editora: 'Editora do Livro B'
        },
        'bookC': {
            quantidadePaginas: 400,
            autor: 'Autor do Livro C',
            editora: 'Editora do Livro C'
        }
    }

    return !bookName ? obj : obj[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro bookA tem ${book('bookA').quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro bookA é ${book('bookA').autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro bookA foi publicado pela editora ${book('bookA').editora}.`);
