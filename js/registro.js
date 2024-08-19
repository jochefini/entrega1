//función para que muestre o deje de mostrar la contraseña haciendo clic en el ojo

let password = document.getElementById("password");
    let viewPassword = document.getElementById("viewPassword");
    let click = false;

    viewPassword.addEventListener("click", (e)=>{
        if(!click){
            password.type = "text"
            click = true
        }else if(click){
            password.type = "password"
            click = false
        }
        e.preventDefault()
    })

//Función de registro de nuevo usuario

const signupform = document.querySelector('#signupform')
signupform.addEventListener('submit', (e)=>{
       e.preventDefault()
        const usuario = document.querySelector('#usuario').value
       const password = document.querySelector('#password').value

        const Users =JSON.parse(localStorage.getItem('users')) || []
        const IsUserRegistered = Users.find(user=>user.usuario === usuario)
        if (IsUserRegistered) { return alert ("El usuario ya se ha registrado")}

       Users.push({usuario: usuario, password: password})
       localStorage.setItem('users',JSON.stringify(Users))
       alert ("Registro exitoso")
       window.location.href = "login.html"
   })

