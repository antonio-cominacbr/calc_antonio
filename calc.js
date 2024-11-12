const resultado = document.querySelector(".result");
const um = document.getElementById("1");
const dois = document.getElementById("2");
const tres = document.getElementById("3");
const quatro = document.getElementById("4");
const cinco = document.getElementById("5");
const seis = document.getElementById("6");
const sete = document.getElementById("7");
const oito = document.getElementById("8");
const nove = document.getElementById("9");
const zero = document.getElementById("0");
const mais = document.getElementById("+");
const menos = document.getElementById("-");
const vezes = document.getElementById("x");
const conta = document.querySelector(".conta");
const igual = document.getElementById("igual");
const AC = document.getElementById("AC");



zero.onclick = function() {
    conta.textContent += 0;
}

um.onclick = function() {
    conta.textContent += 1;
}

dois.onclick = function() {
    conta.textContent += 2;
}

tres.onclick = function() {
    conta.textContent += 3;
}

quatro.onclick = function() {
    conta.textContent += 4;
}

cinco.onclick = function() {
    conta.textContent += 5;
}

seis.onclick = function() {
    conta.textContent += 6;
}

sete.onclick = function() {
    conta.textContent += 7;
}

oito.onclick = function() {
    conta.textContent += 8;
}

nove.onclick = function() {
    conta.textContent += 9;
}



menos.onclick = function() {
    conta.textContent += "-";
}

mais.onclick = function() { 
    conta.textContent += "+";
}

vezes.onclick = function() {
    conta.textContent += "*";
}

igual.onclick = function() {
    resultado.textContent = "resultado: " + eval(conta.textContent);
    conta.textContent = "conta: "
}

AC.onclick = function() {
    resultado.textContent = "resultado: "
    conta.textContent = "conta: "
}