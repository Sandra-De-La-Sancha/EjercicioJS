let btnBorrar = document.getElementById("btnBorrar");
let encabezado = document.getElementsByTagName("h1").item(0);    


window.addEventListener("load", function(event){
    event.preventDefault();
    if(this.localStorage.getItem("Nombre")!=null){
        encabezado.innerHTML=`Hola,  ${this.localStorage.getItem("Nombre")} que gusto verte de nuevo :)
        <br/>`;    
    
        
    }else{
        encabezado.innerText = "Por favor regresa al index para registrarte";

    }//null
});

btnBorrar.addEventListener("click",function(event){
    event.preventDefault();
    localStorage.removeItem("Nombre");
    encabezado.innerText = "Por favor regresa al index para registrarte";
});