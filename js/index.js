import * as V from './validator.js'

const name = document.querySelector('#name')
const mail = document.querySelector('#mail')
const message = document.querySelector('#message')
const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    let error = false
    if (!V.verifyName(name?.value)) error = true
    if (!V.verifyMail(mail?.value)) error = true
    if (!V.verifyMsg(message?.value)) error = true

    if (error) {
        form.dataset.error = 'Please verify all the fields.'
    } else {
        delete form.dataset.error
        form.classList.add('sending')

        // form.submit()
        fetch('/php/email.php',{
            method: 'POST',
            body: new FormData(form)
        })
            .then(res => res.json())
            .then(res => {
                if (res.success) {

                } else {
                    console.error('Une erreur est survenue.')
                }
            })
            .catch(err => console.error(err))
    }
})
