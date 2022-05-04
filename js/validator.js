const fields = document.querySelectorAll('.field')

export const verifyName = (name) => {
    if (!name || name === '') {
        fields[0].dataset.error = 'This field cannot be empty.'
        return false
    }

    else if (/[`~!@#$%^&*()_|+\-=?;:",.<>\{\}\[\]\\\/]/.test(name)) {
        fields[0].dataset.error = 'Your name cannot contain special chars (expect - \' and spaces).'
        return false
    }

    // lettres, espaces, - et ' autorisés.
    else if (!/^[\D '\-]+$/.test(name)) {
        fields[0].dataset.error = 'The name is not a valid name.'
        return false
    }

    delete fields[0].dataset.error
    return true
}
export const verifyMail = (mail) => {
    if (!mail || mail === '') {
        fields[1].dataset.error = 'This field cannot be empty.'
        return false
    }

    // all chars except @ (and . at the end and the beginning)
    if (!/^[^@ \t\r\n.][^@ \t\r\n]*[^@ \t\r\n.]@[^@ \t\r\n]+\.[^@ \t\r\n]+$/.test(mail)) {
        fields[1].dataset.error = 'The mail is not a valid mail.'
        return false
    }

    delete fields[1].dataset.error
    return true
}
export const verifyMsg = (msg) => {
    if (!msg || msg === '') {
        fields[2].dataset.error = 'This field cannot be empty.'
        return false
    }

    if (msg.length < 10) {
        fields[2].dataset.error = 'Your message is too short.'
        return false
    }

    delete fields[2].dataset.error
    return true
}
