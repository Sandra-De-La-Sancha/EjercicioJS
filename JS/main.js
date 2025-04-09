let encabezado1 = document.getElementsByTagName("h1").item(0);


if (localStorage.getItem("email") != null) {
    let email = localStorage.getItem("email");
    encabezado1.innerText = `Bienvenido de nuevo ${email}`;
    console.log(email);


    localStorage.removeItem("email");//Elimina una variable
    localStorage.clear(); //Limpia los conjuntos de clave/valor


} else {
    //guarda el correo electronico en el navegador
    localStorage.setItem("email", "jperez@hotmail.com");

}//!null


//Guarda el correo electronico en el navegador
//localStorage.setItem("email", "jperez@hotmail.com");
