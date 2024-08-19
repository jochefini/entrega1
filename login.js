//Función para que muestre o deje de mostrar la contraseña haciendo clic en el ojo

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

    //Función para que valide usuario y contraseña y lo guarde en localStorage

 const logeo = document.querySelector('#logeo')
 logeo.addEventListener('submit', (event)=>{
        event.preventDefault()
        const usuario = document.querySelector('#usuario').value
        const password = document.querySelector('#password').value

        const Users =JSON.parse(localStorage.getItem('users')) || []
        const validUser = Users.find( user=> user.usuario === usuario && user.password === password)

        if(!validUser){
            return alert ("Usuario y/o contraseña incorrectos")
        }
        alert ("Bienvenido")
       localStorage.setItem('login_success', JSON.stringify(validUser))
       window.location.href = "index.html"
        })