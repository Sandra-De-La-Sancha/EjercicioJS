//////////////////VARIABLES///////////////////////////////
let txtNombre = document.getElementById("txtNombre");
let btnEnviar = document.getElementById ("btnEnviar");

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();//no hace lo que hace por defecto
    txtNombre.value=txtNombre.value.toUpperCase();//Convierte a mayuscula txtNombre es el id de mi label 
                                                  

    localStorage.setItem("Nombre", txtNombre.value);
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
