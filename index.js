
let formValidation = document.querySelector("#form-validation");
let number1 = document.querySelector("#number1");
let operacao = document.querySelector("#operacao");
let number2 = document.querySelector("#number2");
let divRes = document.querySelector(".resultado");
let p = document.createElement("p");
let button = document.querySelector("#btn");


button.addEventListener("click", () => {

    if(!number1.value || !number2.value) {
        p.innerText = `Preencha os campos corretamente.`;
        p.style.color = "red";
        divRes.appendChild(p);
    } else if(!operacao.value){
        p.innerText = `Insira um operador. ex: + - * /`;
        p.style.color = "red";
        divRes.appendChild(p);
    } else {
    p.innerText = `O resultado é: ${calculadora()}`;
    p.style.color = "#242424"
    divRes.appendChild(p);
    number1.value = "";
    operacao.value = "";
    number2.value = "";
    }

         
});

formValidation.addEventListener("submit", (e) => e.preventDefault())

let calculadora = (num1, num2, operador) => {

    let resultado;
    num1 = Number(number1.value);
    num2 = Number(number2.value);
    operador = operacao.value;

    if(operador === "+") {
        resultado = num1 + num2;
        
    } else if (operador === "-") {
        resultado = num1 - num2;
        
    } else if (operador === "*") {
        resultado = num1 * num2;
        
    } else if (operador === "/") {
        resultado = num1 / num2;
        
    } else {
       resultado = "Insira um operador válido."
       
    }

    return resultado
}

