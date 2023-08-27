
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let listaTarefas = document.querySelector('#listaTarefas');
let janelaEdicao = document.querySelector('#janelaEdicao');
let janelaEdicaoFundo = document.querySelector('#janelaEdicaoFundo');
let janelaEdicaoBtnFechar = document.querySelector('#janelaEdicaoBtnFechar');
let btnAtualizarTarefa = document.querySelector('#btnAtualizarTarefa');
let idTarefaEdicao = document.querySelector('#idTarefaEdicao');
let inputTarefaNomeEdicao = document.querySelector('#inputTarefaNomeEdicao');


inputNovaTarefa.addEventListener('keypress', (e) => {
  if(e.keyCode == 13) {
    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarIdV2(),
    }
    adicionarTarefa(tarefa);
}
});
janelaEdicaoBtnFechar.addEventListener('click', (e) => {
  alternarJanelaEdicao()
})
btnAddTarefa.addEventListener('click', (e) => {

  let tarefa = {
    nome: inputNovaTarefa.value,
    id: gerarId(),
  }
  adicionarTarefa(tarefa)

})
btnAtualizarTarefa.addEventListener('click', (e) => {
  e.preventDefault()
  let idTarefa = idTarefaEdicao.innerHTML.replace('#', '')

  let tarefa = {
    nome: inputTarefaNomeEdicao.value,
    id: idTarefa
  }
  let tarefaAtual = document.getElementById('' + idTarefa + '')

  if (tarefaAtual) {
    let li = criarTagLi(tarefa)
    listaTarefas.replaceChild(li, tarefaAtual)
    alternarJanelaEdicao()
  }
})
function gerarId() {
  return Math.floor(Math.random() * 3000)
}

function adicionarTarefa(tarefa) {

  let li = criarTagLi(tarefa)
  listaTarefas.appendChild(li)
  inputNovaTarefa.value = ''
}
function criarTagLi(tarefa) {
  const li = document.createElement('li')
  li.id = tarefa.id

  const span = document.createElement('span')
  span.classList.add('textoTarefa')
  span.innerHTML = tarefa.nome

  const div = document.createElement('div')

  const btnEditar = document.createElement('button')
  btnEditar.classList.add('btnAcao')
  btnEditar.innerHTML = '<i class="fa fa-pencil"></i>'
  btnEditar.setAttribute('onclick', 'editar(' + tarefa.id + ')')


  const btnExcluir = document.createElement('button')

  btnExcluir.classList.add('btnAcao')
  btnExcluir.innerHTML = '<i class="fa fa-trash"></i>'
  btnExcluir.setAttribute('onclick', 'excluir(' + tarefa.id + ')')

  div.appendChild(btnEditar)
  div.appendChild(btnExcluir)

  li.appendChild(span)
  li.appendChild(div)
  return li

}

function editar(idTarefa) {
  let li = document.getElementById('' + idTarefa + '')
  if (li) {
    idTarefaEdicao.innerHTML = '#' + idTarefa
    inputTarefaNomeEdicao.value = li.innerText
    alternarJanelaEdicao()
  }else{
    alert('Elemento HTNL não encontrado!')
  }
}

function excluir(idTarefa) {
  let confirmacao = window.confirm('Tem certeza que deseja excluir? ');
  if (confirmacao) {
    let li = document.getElementById('' + idTarefa + '');
    if (li) {
      listaTarefas.removeChild(li);
    } else {
      alert('Elemento HTML não encontrado!');
    }
  }
}
function alternarJanelaEdicao() {
  janelaEdicao.classList.toggle('abrir')
  janelaEdicaoFundo.classList.toggle('abrir')
}