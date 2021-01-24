const fullname = document.getElementById('fullname')
const fullnameCorrect = document.getElementById('fullname-correction')
const email = document.getElementById('email')
const emailCorrect = document.getElementById('email-correction')
const username = document.getElementById('username')
const usernameCorrect = document.getElementById('username-correction')
const password = document.getElementById('password')
const passwordCorrect = document.getElementById('password-correction')
const button = document.getElementById('button')

// console.log(fullname,fullnameCorrect,email,emailCorrect,username, usernameCorrect, password, passwordCorrect, button)
 const focus = document.hasFocus(fullname)
 
 button.addEventListener('click', () => {
     //this is for the fullname 
     if(fullname.value.length < 5) fullnameCorrect.textContent = 'too short'
     else if(/\d/gi.test(fullname.value)) fullnameCorrect.textContent = 'cannot contain numbers'
     else if(!/^[ a-z ]*$/gi.test(fullname.value)) fullnameCorrect.textContent = 'only use alphabetic characters'
     else fullnameCorrect.textContent = 'I love your name'

     //this is for the email
     if(email.value.length === 0) emailCorrect.textContent = "I can't be empty"
     else if(!/.@/g.test(email.value)) emailCorrect.textContent = 'must have . and @'
     else if(/[@]{2,}/g.test(email.value)) emailCorrect.textContent = 'too many @\'s'
     else if(/[.]{2,}/g.test(email.value)) emailCorrect.textContent = 'too many .\'s'
     else if(/[A-Z]/g.test(email.value)) emailCorrect.textContent = "don't use uppercase letters"
     else emailCorrect.textContent = "I love your email"

     //this is for the password
    if(password.value.length === 0) passwordCorrect.textContent = "I can't be empty"
    else if(!/\d/g.test(password.value)) passwordCorrect.textContent = "too weak! add a number"
    else if(!/[A-Z]/g.test(password.value)) passwordCorrect.textContent = "too weak! add uppercase letters"
    else if(/^[a-z0-9]*$/gi.test(password.value)) passwordCorrect.textContent = "too weak! add alphanumericals"
    else passwordCorrect.textContent = "your password is invincible"
 })
 button.addEventListener('blur', () => {
     //this is for the fullname 
      fullnameCorrect.textContent = ''

     //this is for the email
     emailCorrect.textContent = ""

     //this is for the password
     passwordCorrect.textContent = ""
 })
