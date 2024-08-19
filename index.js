document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

//Chequea si esta logeado o no
   const user = JSON.parse(localStorage.getItem('login_success')) || false

   if(!user) { window.location.href = 'login.html'}

   const logout = document.querySelector('#logout')
   logout.addEventListener('click', ()=>{ 
    alert("Hasta pronto")
   localStorage.removeItem('login_success')
   window.location.href = 'login.html'
})