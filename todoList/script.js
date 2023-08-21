const tarefas = document.querySelector('.tarefas')
const btn = document.getElementById('btn')

const addTarefa = (tarefa) => {
  // const paragrafo = document.querySelector('.paragraf')
  const div = document.createElement('div')
  div.classList.add('tarefa')
  const botao = document.createElement('button')
  botao.classList.add('img')
  botao.id = 'excluir'
  botao.innerHTML ='X'
  const p = document.createElement('p')
  p.innerHTML += tarefa
  div.appendChild(p)
  div.appendChild(botao)
  tarefas.appendChild(div)
  console.log(botao)
}

btn.addEventListener('click', (e) => {
   e.preventDefault()
   const texto = document.getElementById('texto')
   const valor = texto.value;
   addTarefa(valor)
})
