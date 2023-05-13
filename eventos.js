const h1 = document.querySelector('h1');

const form = document.querySelector('#form')

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');

const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');


//addEL es un escuchador de eventos que necesita 2 parametros 
//1ro el nombre del evento, 2do el codigo js que mandemos a llamar no se envia con parentesis
//btn.addEventListener('click', btnOnClick);

form.addEventListener('submit', btnOnClick)


function btnOnClick(event) {
    //esto hace que no se recargue la pag
    event.preventDefault();
    //concatenamos esos 2 valore 4 + 55 = 455
    //console.log(input1.value + input2.value);

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado : " + sumaInputs;
}


