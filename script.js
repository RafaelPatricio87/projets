const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')
const display = document.getElementById('display')

let novoNumero = true
let numeroAnterior;
let operador;

const operacaoPendente = () => operador !== undefined

const calcular = () => {
  if (operacaoPendente()) {
    const numeroAtual = parseFloat(display.textContent.replace(',','.'));
    novoNumero = true;
    if (operador === '+') {
      atualizarDisplay(numeroAnterior + numeroAtual)
    } else if (operador === "-") {
      atualizarDisplay(numeroAnterior - numeroAtual)
    } else if (operador === "*") {
      atualizarDisplay(numeroAnterior * numeroAtual)
    } else if (operador === "/") {
      atualizarDisplay(numeroAnterior / numeroAtual)
    }
  }
}
const atualizarDisplay = (texto) => {
  if (novoNumero) {
    display.textContent = texto.toLocaleString('BR')
    novoNumero = false
  } else {
    display.textContent += texto.toLocaleString('BR')
  }
}
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', inserirNumero))

const selecionarOperador = (evento) => {
  if (!novoNumero) {
    calcular()
    novoNumero = true;
    operador = evento.target.textContent
    numeroAnterior = parseFloat(display.textContent.replace(',','.'));
  }
}
const ativarIgual =() =>{
  calcular()
  operador = undefined
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))
document.getElementById('igual').addEventListener('click', ativarIgual)

const limparDisplay = () => display.textContent = ''

document.getElementById('limparDisplay').addEventListener('click',limparDisplay)

const limparCalculo = () => {
  display.textContent = ''
 operador = undefined
 novoNumero = true
 numeroAnterior = undefined
}
document.getElementById('limparCalculo').addEventListener('click',limparCalculo)

// const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1)
const removerUltimoNumero = () => {
  const numeroAntes = display.textContent.split('')
  const removido = numeroAntes.indexOf(-1)
   numeroAntes.splice(removido, 1)
  console.log(numeroAntes.join(''))
  display.textContent = numeroAntes.join('')
}
document.getElementById('backspace').addEventListener('click', removerUltimoNumero);

const inverter = () => {
   novoNumero = true
   atualizarDisplay(display.textContent * -1)
}
document.getElementById('inverter').addEventListener('click',inverter);
const existeDecimal = () => display.textContent.indexOf(',') !== -1
const existeValor = () => display.textContent.length > 0;

const inseriVirgula = () => {
   if(!existeDecimal()){
     if(existeValor()){
         atualizarDisplay(',')
     } else {
      atualizarDisplay('0,')
     }
   }
}
document.getElementById('decimal').addEventListener('click',inseriVirgula)

const mapaTeclado = {
  '0'          : 'tecla0',
  '1'          : 'tecla1',
  '2'          : 'tecla2',
  '3'          : 'tecla3',
  '4'          : 'tecla4',
  '5'          : 'tecla5',
  '6'          : 'tecla6',
  '7'          : 'tecla7',
  '8'          : 'tecla8',
  '9'          : 'tecla9',
  '/'          : 'operadorDividir',
  '*'          : 'operadorMultiplicar',
  '-'          : 'operadorSubtrair',
  '+'          : 'operadorAdicionar',
  '='          : 'igual',
  'Enter'      : 'igual',
  'Backspace'  : 'backspace',
  'C'          : 'limparDisplay',
  'Escape'     : 'limparCalculo',
  ','          : 'decimal'
}
const mapearTeclado = (evento) => {
  const tecla = evento.key;

  const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
  if(teclaPermitida()){
    document.getElementById(mapaTeclado[tecla]).click()
  }
}
document.addEventListener('keydown', mapearTeclado)
