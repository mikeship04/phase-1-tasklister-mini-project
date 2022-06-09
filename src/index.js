document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_task.value)
    form.reset()
  })

});

function buildToDo (todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' X'
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}

// function handleDelete(e){
//   e.target.parentNode.remove()
// }

// function addEventListenerToDeletebuttons(){
//   let buttons = document.getElementsByClassName('delete_btn')
//   for(let btn of buttons){
//     btn.addEventListener('click', handleDelete)
//   }
// }

// addEventListenerToDeletebuttons()

