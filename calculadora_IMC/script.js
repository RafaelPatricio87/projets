const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const btn = document.getElementById('btn')
const display = document.getElementById('display')
console.log(display)
const classificaçãoImc = (imc) => {
  if(imc > 39.9){
    display.innerHTML = `ObesidadeIII`
  }else if(imc > 34.9){
    display.innerHTML = `ObesidadeII`
  }else if(imc > 29.9){
    display.innerHTML = `ObesidadeI`
  }else if(imc > 24.9){
    display.innerHTML = `Acima do peso`
  }else if(imc > 18.5){
    display.innerHTML = `Peso normal`
  }else if(imc > 17){
    display.innerHTML = `Abaixo do peso`
  }else if(imc < 17){
    display.innerHTML = `Muito abaixo do peso`
  }
}
const calcularIMC = (evento) => {
  evento.preventDefault()
  const valorPeso = parseFloat(peso.value)
  const valorAltura = parseFloat(altura.value)
  const imc = valorPeso / (valorAltura * valorAltura)
  console.log(imc)
  classificaçãoImc(imc.toFixed(2))
}

btn.addEventListener('click',calcularIMC)
