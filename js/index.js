import * as V from './validator.js'

const name = document.querySelector('#name')
const mail = document.querySelector('#mail')
const message = document.querySelector('#message')
const form = document.querySelector('form')
const btn = document.querySelector('button')
let sending = false
const div = document.createElement('div')

const success = () => {
    // create alert
    div.className = 'alert'
    div.innerText = 'Message send with success.'

    // empty fields
    name.value = ''
    mail.value = ''
    message.value = ''

    // button
    btn.querySelector('.text').innerText = 'Send'
    btn.disabled = true
    btn.className = 'btn send'
}

const fail = (err) => {
    form.removeChild(div)

    form.classList.remove('sending')
    form.dataset.error = 'An error occured.'
    sending = false
    btn.className = 'btn submit'
    console.log(err)
}

form.addEventListener('submit', e => {
    e.preventDefault()
    if (!sending) {
        let error = false
        if (!V.verifyName(name?.value)) error = true
        if (!V.verifyMail(mail?.value)) error = true
        if (!V.verifyMsg(message?.value)) error = true

        if (error) {
            form.dataset.error = 'Please verify all the fields.'
        } else {
            delete form.dataset.error
            form.classList.add('sending')
            sending = true
            btn.className = 'btn sending'

            div.className = 'spin'
            form.appendChild(div)

            fetch('/php/email.php', {
                method: 'POST',
                body: new FormData(form)
            })
                .then(res => res.json())
                .catch(err => {
                    fail(err)
                })
                .then(res => {
                    if (res.success) {
                        success()
                    } else {
                        fail(res)
                    }
                })
        }
    }
})
