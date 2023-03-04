const form = document.querySelector('.form')
const toast = document.querySelector('.toast')

const resetForm = () => {
  scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
  })
  form.reset()
}

const toastVisibleOrNot = (
  response, 
  success, 
  error, 
  classAdd, 
  classRemove
  ) => {

  if(response) {
    toast.textContent = success
    toast.classList.add(classAdd)
    toast.classList.remove(classRemove)
  } else {
    toast.textContent = error
    toast.classList.add(classRemove)
    toast.classList.remove(classAdd)
  }

  resetForm()
}   

const isToast = (response) => {
  toastVisibleOrNot(
    response, 
    'Mensagem enviada com sucesso!', 
    'Ops, algo deu errado!', 
    'visible',
    'error'
  )

  setTimeout(() => {
    toast.classList.remove('visible')
    toast.classList.remove('error')
  }, 3000)
}

form.addEventListener('submit',(event) => {
  event.preventDefault()
  const url = 'https://api.staticforms.xyz/submit'

  const accessKey = document.querySelector('#accessKey').value
  const subject = document.querySelector("#subject").value
  const name = document.querySelector('#inputName').value
  const age = document.querySelector('#inputIdade').value
  const email = document.querySelector('#inputEmail').value
  const phone = document.querySelector('#inputPhone').value
  const message = document.querySelector('#texteAreaMensagem').value

  fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      accessKey: accessKey,
      subject: subject,
      name: name,
      $age: age,
      email: email,
      phone: phone,
      message: message,
    })
  }).then((response) => isToast(response.ok))
})

