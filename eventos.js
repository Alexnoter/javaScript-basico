const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');

const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');


function btnOnClick() {
    //concatenamos esos 2 valore 4 + 55 = 455
    //console.log(input1.value + input2.value);

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado : " + sumaInputs;
}


