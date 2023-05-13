// importamos elementos de html a js
//document.getEle  Esto solo funciona cuando lo usamos en el navegado

//esta es la forma que debemos hacerlo

//query tenemos que pasarle por parametros cual es el selector al que seleccionaremos
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');


console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//innet modifica el html que este dentro de la etiqueta que seleccionemos h1 tambien permite insertar etiquetas como html
//convierto todo a codigo html
//h1.innerHTML = "patito <br> Feo";

//la forma para protegernos es que nos tradusca todo en text
h1.innerText = "patito <br> Feo";

//la forma normal de modificar atributos es con getAtribute y setAtribute
// console.log(h1.getAttribute('class'));

//modificamos y cambiamos el color
// h1.setAttribute('class', 'rojo')

//con esta funcion podemos agregarle una clase
h1.classList.add('rojo')
//elimina una clase
h1.classList.remove('verde')


input.value = "456"


//con esto creamos un elemento desde js me crea una etiqueta

//console.log(document.createElement('img'));

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png')
console.log(img);

//y si agregamos esto borramos el anterior contenimo y modificamos pid
pid.innerHTML = "";
//con esto agregamos la imagen abajo de la anterior etiqueta
pid.append(img);




