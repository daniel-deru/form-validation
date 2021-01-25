const fullname = document.getElementById('fullname')
const fullnameCorrect = document.getElementById('fullname-correction')
const email = document.getElementById('email')
const emailCorrect = document.getElementById('email-correction')
const username = document.getElementById('username')
const usernameCorrect = document.getElementById('username-correction')
const password = document.getElementById('password')
const passwordCorrect = document.getElementById('password-correction')
const button = document.getElementById('button')
const comp = document.getElementById('completed')
const cont = document.getElementById('container')
const refresh = document.getElementById("refresh")
let count = 0

//this is for the fullname
fullname.addEventListener('focus',() => {
    if(fullname.value.length < 5) fullnameCorrect.textContent = 'too short'
    fullname.addEventListener('keyup', () => {
        if(fullname.value.length < 5) fullnameCorrect.textContent = 'too short'
        else if(/\d/gi.test(fullname.value)) fullnameCorrect.textContent = 'cannot contain numbers'
        else if(!/^[ a-z ]*$/gi.test(fullname.value)) fullnameCorrect.textContent = 'only use alphabetic characters'
        else fullnameCorrect.textContent = 'I love your name'
     })
})
fullname.addEventListener('blur', () => {
    if(fullnameCorrect.textContent == 'I love your name') fullnameCorrect.textContent = ''
})
      
     
//this is for the email
email.addEventListener('focus', () => {
    if(email.value.length === 0) emailCorrect.textContent = "I can't be empty"
    email.addEventListener('keyup', () => {
        if(email.value.length === 0) emailCorrect.textContent = "I can't be empty"
        else if(/ +/g.test(email.value)) emailCorrect.textContent = "don't use spaces"
        else if(!/\./g.test(email.value)) emailCorrect.textContent = 'must have .'
        else if(!/@/g.test(email.value)) emailCorrect.textContent = 'must have @'
        else if(/[@]{2,}/g.test(email.value)) emailCorrect.textContent = 'too many @\'s'
        else if(/[.]{2,}/g.test(email.value)) emailCorrect.textContent = 'too many .\'s'
        else if(/[A-Z]/g.test(email.value)) emailCorrect.textContent = "don't use uppercase letters"
        else emailCorrect.textContent = "I love your email"
     })
})
email.addEventListener('blur', () => {
    if(emailCorrect.textContent == 'I love your email') emailCorrect.textContent = ''
})
    
   
 //this is for the password
password.addEventListener('focus', () => {
    if(password.value.length === 0) passwordCorrect.textContent = "I can't be empty"
    password.addEventListener('keyup', () => {
        if(password.value.length === 0) passwordCorrect.textContent = "I can't be empty"
        else if(/[ ]+/gi.test(password.value)) passwordCorrect.textContent = "don't use spaces"
        else if(!/\d/g.test(password.value)) passwordCorrect.textContent = "too weak! add a number"
        else if(!/[A-Z]/g.test(password.value)) passwordCorrect.textContent = "too weak! add uppercase letters"
        else if(/^[a-z0-9]*$/gi.test(password.value)) passwordCorrect.textContent = "too weak! add alphanumericals"
        else passwordCorrect.textContent = "your password is invincible"
     })
})
password.addEventListener('blur', () => {
    if(passwordCorrect.textContent == "your password is invincible") passwordCorrect.textContent = ''
})
    
     fullname.addEventListener('keyup', () => {
         count+=1
        document.body.style.backgroundColor = `rgb(${255-email.value.length*10}, ${0+fullname.value.length*10}, ${0+username.value.length*10})`
        fullname.style.color = `rgb(${255-email.value.length*10}, ${0+fullname.value.length*10}, ${0+username.value.length*10})`
        button.style.color = `rgb(${255-email.value.length*10}, ${0+fullname.value.length*10}, ${0+username.value.length*10})`
     })
     email.addEventListener('keyup', () => {
         count+=1
        document.body.style.backgroundColor =`rgb(${255-email.value.length*10}, ${0+fullname.value.length*10}, ${0+username.value.length*10})`
        email.style.color =`rgb(${255-email.value.length*10}, ${0+fullname.value.length*10}, ${0+username.value.length*10})`
        button.style.color = `rgb(${255-email.value.length*10}, ${0+fullname.value.length*10}, ${0+username.value.length*10})`
     })
     username.addEventListener('keyup', () => {
         count+=1
        document.body.style.backgroundColor =`rgb(${255-email.value.length*10}, ${0+fullname.value.length*10}, ${0+username.value.length*10})`
        username.style.color =`rgb(${255-email.value.length*10}, ${0+fullname.value.length*10}, ${0+username.value.length*10})`
        button.style.color = `rgb(${255-email.value.length*10}, ${0+fullname.value.length*10}, ${0+username.value.length*10})`
     })
     password.addEventListener('keyup', () => {
         count+=1
        document.body.style.backgroundColor = `rgb(${255-email.value.length*10}, ${0+fullname.value.length*10 - password.value.length*3}, ${0+username.value.length*10})`
        password.style.color = `rgb(${255-email.value.length*10}, ${0+fullname.value.length*10 - password.value.length*3}, ${0+username.value.length*10})`
        button.style.color = `rgb(${255-email.value.length*10}, ${0+fullname.value.length*10}, ${0+username.value.length*10})`
     })
     
     button.addEventListener('click', () => {
         console.log(count)
         if(fullnameCorrect.textContent == ''&& 
            usernameCorrect.textContent == ''&& 
            emailCorrect.textContent    == ''&& 
            passwordCorrect.textContent == ''&&
            count > 0
             ){
                cont.style.opacity = "0"
                comp.style.opacity = "1"
                cont.style.pointerEvents = 'none'
                button.textContent = "back"
            } 
     })

     function refresh(){
         if(button.textContent == "back"){
             location.reload()
         }
     }
     refresh()

     

     
     
     

     



