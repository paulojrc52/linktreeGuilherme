const form = document.querySelector('.form')
const toast = document.querySelector('.toast')

const isToast = (response) => {
     
    if(response) {
        toast.textContent = 'Dados enviados com sucesso!'
        toast.classList.remove('error')
        toast.classList.add('visible')
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        form.reset()   
    }

    if(!response) {
        toast.textContent = 'Ops, algo deu errado!'
        toast.classList.remove('visible')
        toast.classList.add('error')
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        form.reset()  
    }

    setTimeout(() => {
        toast.classList.remove('visible')
        toast.classList.remove('error')
    }, 3000)
}

form.addEventListener('submit',(event) => {
    event.preventDefault()
    const url = 'https://api.staticforms.xyz/submit'

    const accessKey = document.querySelector('#accessKey').value
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
            name: name,
            $age: age,
            email: email,
            phone: phone,
            message: message,
        })
    }).then((response) => isToast(response.ok))
      
})
