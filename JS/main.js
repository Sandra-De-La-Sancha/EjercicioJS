//////////////////VARIABLES///////////////////////////////
let txtNombre = document.getElementById("txtNombre");
let btnNombre = document.getElementById ("btnNombre");

btnNombre.addEventListener("click", function(event){
    event.preventDefault();
    let nombre=txtNombre.value;
    localStorage.setItem("nombre", nombre);
});


//if (localStorage.getItem("email") != null) {
  //  let email = localStorage.getItem("email");
  //  encabezado1.innerText = `Bienvenido de nuevo ${email}`;
  //  console.log(email);


  //  localStorage.removeItem("email");//Elimina una variable
   // localStorage.clear(); //Limpia los conjuntos de clave/valor


//} else {
    //guarda el correo electronico en el navegador
 //   localStorage.setItem("email", "jperez@hotmail.com");

//}//!null
