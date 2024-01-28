// const input = document.querySelector(input);

// input.addEventListener('blur',() =>{
//     console.log("element)
// })
const error = document.querySelector('.error')
const username = document.getElementById('username')
username.addEventListener("blur",(event) => {
    let usernameValue = event.target.value
    if(usernameValue.length < 4) {
        username.style.border = '1px solid red '
        error.style.display = 'block'
    } else {
        username.style.border = null
        error.style.display = 'none'
    }


})

// const password = document.getElementById('password')
// password.addEventListener('blur',(event))=> {
//     let passwordValue = event.target.value
//     let hasCapitalLetter = false;
//     let hasLowerCaseLetter = false;
//     let hasNumbers = false;
//     for (let i=0; i < passwordValue.length; i++){
//         const characater = passwordValue[i];
//         if(character >= 'A'&& character <= 'Z')
//         hasCapitalLetter = true;
//     }
// }  if(character >= 'a'&& character <= 'z'){}
// hasCapitalLetter = true;
// } if(character >= '0'&& character <= '9')
// hasNumbers = true;
// }

// }

// if(hasCapitalLetter == false || hasLowerCaseLetter == false || hasNumbers == false){
//     password.style.border = '1px solid red'

// } else {
//     password.style.border = null
// }

// const repeatPassword = document.getElementById('repeat-password')
// repeatPassword.addEventListener('keyup', (event)=> {
//     if (password.value === repeatPassword.value) {
//         repeatPassword.style.border = '1px solid red';
//     } else {
//         repeatPassword.style.border = '1px solid green'
//     }


//     }
// })


