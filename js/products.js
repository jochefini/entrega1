const DATACARS = 'https://japceibal.github.io/emercado-api/cats_products/101.json'


const probandoAutos = document.getElementById("probandoAutos");

function showData(dataArray) {
    // El for itera sobre los elementos del array
    for (const item of dataArray) {
      // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
      probandoAutos.innerHTML += `<p> Modelo: ${item.name} <br> Descripción: ${item.description} <br> Precio: ${item.currency}${item.cost} <br> Cantidad de Vendidos: ${item.soldCount} <br>  <img src=${item.image} alt=${item.name}/></p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
    }
  }
  

fetch(DATACARS)
.then((res) =>{
  console.log(res);
  return res.ok? res.json(): Promise.reject(res); //esto hace que: si la respuesta es ok manda un rest.json y sino rechaza la promesa
})
.then(data => {
  // Acceso al array products dentro de data 
  const products = data.products;
  showData(products); // Paso array para la funcion showData
})
.catch((err) => {
  console.log(err);
  let message = err.statusText || "Ocurrió un error";
  probandoAutos.innerHTML = `Error ${err.status}: ${message}`;
})
.finally(() => 
  console.log('Esto se ejecutará independientemente del resultado de la Promesa Fetch')); //por poner algo
